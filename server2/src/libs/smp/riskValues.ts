import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

export const RiskValuesSchema = z.object({
    type: z.enum(["Consequence", "Probability", "Exposure"]),
    name: z.string(),
    scale: z.number().int().positive(),
    matrixId: z.number().int().positive(),
});

export const RiskValuesUpdateSchema = RiskValuesSchema.partial();

const createRiskValues = async (req: Request, res: Response) => {
    try {
        const data = RiskValuesSchema.parse(req.body);
        const riskValue = await prisma.riskValues.create({ data });
        res.status(201).json(riskValue);
    } catch (err: any) {
        res.status(400).json({ error: err.errors || "Invalid request" });
    }
};

const getAllRiskValues = async (_req: Request, res: Response) => {
    const riskValues = await prisma.riskValues.findMany({
        include: { matrix: true },
    });
    res.status(200).json(riskValues);
};

const getRiskValuesById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

    const riskValue = await prisma.riskValues.findUnique({
        where: { id },
        include: { matrix: true },
    });
    if (!riskValue) return res.status(404).json({ error: "RiskValues not found" });

    res.status(200).json(riskValue);
};

const updateRiskValues = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

        const data = RiskValuesUpdateSchema.parse(req.body);
        const updatedRiskValue = await prisma.riskValues.update({
            where: { id },
            data,
        });
        res.status(200).json(updatedRiskValue);
    } catch (err: any) {
        res.status(400).json({ error: err.errors || "Invalid request" });
    }
};

const deleteRiskValues = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

    await prisma.riskValues.delete({ where: { id } });
    res.status(204).send();
};

export {
    createRiskValues,
    getAllRiskValues,
    getRiskValuesById,
    updateRiskValues,
    deleteRiskValues,
};