import { z } from "zod";
import { prisma } from "../../utils/prisma";
import { Response, Request } from "express";

export const RiskMatrixSchema = z.object({
  name: z.string().max(255, "Name should not exceed 255 characters"),
  col: z.number().int().positive(),
  row: z.number().int().positive(),
});

export const RiskValuesSchema = z.object({
  type: z.enum(["Consequence", "Probability", "Exposure"]),
  name: z.string(),
  scale: z.number().int().positive(),
  matrixId: z.number().int().positive(),
});

export const RiskMatrixUpdateSchema = RiskMatrixSchema.partial();
export const RiskValuesUpdateSchema = RiskValuesSchema.partial();

const CombinedSchema = z.object({
    dimensions: z.object({
        col: z.number().int().positive(),
        row: z.number().int().positive(),
        name: z.string(),
    }),
    consequences: z.array(z.object({
        name: z.string(),
        scale: z.number()
    })),
    probability: z.array(z.object({
        name: z.string(),
        scale: z.number()
    })),
    exposure: z.array(z.object({
        name: z.string(),
        scale: z.number()
    })),
})

const createRiskMatrixWithRiskValue = async (req: Request, res: Response) => {
    const processedBody = {
        ...req.body,
        dimensions: {
            ...req.body.dimensions,
            name: req.body.dimensions?.name,
        },
        consequences: req.body.consequences.map((item: any) => ({
            ...item,
            scale: parseFloat(item.scale),
        })),
        probability: req.body.probability.map((item: any) => ({
            ...item,
            scale: parseFloat(item.scale),
        })),
        exposure: req.body.exposure.map((item: any) => ({
            ...item,
            scale: parseFloat(item.scale),
        })),
    };

    const validatedData = CombinedSchema.parse(processedBody);

    const data = await prisma.$transaction(async (prisma) => {
        const matrixData = await prisma.riskMatrix.create({
            data: {
                name: validatedData.dimensions.name,
                row: validatedData.dimensions.row,
                col: validatedData.dimensions.col
            }
        })

        const shapedRiskValueData = [
            ...validatedData.consequences.map((item) => ({
                name: item.name,
                scale: item.scale,
                type: 'Consequence',
                matrixId: matrixData.id,
            })),
            ...validatedData.probability.map((item) => ({
                name: item.name,
                scale: item.scale,
                type: 'Probability',
                matrixId: matrixData.id,
            })),
            ...validatedData.exposure.map((item) => ({
                name: item.name,
                scale: item.scale,
                type: 'Exposure',
                matrixId: matrixData.id,
            })),
        ];
        const riskValueData = await prisma.riskValues.createMany({
            // @ts-ignore
            data: shapedRiskValueData,
        })

        return {
            matrixData,
            riskValueData
        }
    })

    res.status(200).json({
        data
    })
}

const createRiskMatrix =  async (req: Request, res: Response) => {
  try {
    const data = RiskMatrixSchema.parse(req.body);
    const riskMatrix = await prisma.riskMatrix.create({ data });
    res.status(201).json(riskMatrix);
  } catch (err: any) {
    res.status(400).json({ error: err.errors || "Invalid request" });
  }
};

const getAllRiskMatrix =  async (_req: Request, res: Response) => {
  const riskMatrices = await prisma.riskMatrix.findMany({
    include: { RiskValues: true },
  });
  res.status(200).json(riskMatrices);
};

// @ts-ignore
const  getRiskMatrixById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  const riskMatrix = await prisma.riskMatrix.findUnique({
    where: { id },
    include: { RiskValues: true },
  });
  if (!riskMatrix) return res.status(404).json({ error: "RiskMatrix not found" });

  res.status(200).json(riskMatrix);
};

// @ts-ignore
const updateRiskMatrix = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

    const data = RiskMatrixUpdateSchema.parse(req.body);
    const updatedRiskMatrix = await prisma.riskMatrix.update({
      where: { id },
      data,
    });
    res.status(200).json(updatedRiskMatrix);
  } catch (err: any) {
    res.status(400).json({ error: err.errors || "Invalid request" });
  }
};

// @ts-ignore
const deleteRiskMatrix = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  await prisma.riskMatrix.delete({ where: { id } });
  res.status(204).send();
};

export {
    createRiskMatrix,
    getAllRiskMatrix,
    getRiskMatrixById,
    updateRiskMatrix,
    deleteRiskMatrix,
    createRiskMatrixWithRiskValue
}