import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

// TODO

export const RiskAssessmentSchema = z.object({
    activity: z.string(),
    sectionId: z.number().int().positive(),
    hazard: z.string(),
    Mechanism: z.string(),
    exposedGroup: z.string(),
    description: z.string(),
    consequence: z.number().min(0),
    exposure: z.number().min(0),
    probability: z.number().min(0),
    riskValue: z.number().min(0),
    riskControlPlan: z.array(z.record(z.any())).optional(),
});

export const RiskAssessmentUpdateSchema = RiskAssessmentSchema.partial();

const createRiskAssesment =  async (req: Request, res: Response) => {
  try {
    const data = RiskAssessmentSchema.parse(req.body);
    const riskAssessment = await prisma.riskAssesment.create({
      data: data
    });
    res.status(201).json(riskAssessment);
  } catch (err: any) {
    console.log(err)
    res.status(400).json({ error: err.errors || "Invalid request" });
  }
};

const getAllRiskAssessments =  async (_req: Request, res: Response) => {
  const riskAssessments = await prisma.riskAssesment.findMany({
    include: { section: true },
  });
  const sortedRiskAssessments = riskAssessments.sort((a, b) => b.riskValue - a.riskValue);
  res.status(200).json(sortedRiskAssessments);
};

const getRiskAssessmentByID =  async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  const riskAssessment = await prisma.riskAssesment.findUnique({
    where: { id },
    include: { section: true },
  });
  if (!riskAssessment) return res.status(404).json({ error: "RiskAssessment not found" });

  res.status(200).json(riskAssessment);
};

const updateRiskAssessment = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

    const data = RiskAssessmentUpdateSchema.parse(req.body);
    const updatedRiskAssessment = await prisma.riskAssesment.update({
      where: { id },
      data,
    });
    res.status(200).json(updatedRiskAssessment);
  } catch (err: any) {
    res.status(400).json({ error: err.errors || "Invalid request" });
  }
};

const deleteRiskAssessment = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  await prisma.riskAssesment.delete({ where: { id } });
  res.status(204).send();
};

export {
    createRiskAssesment,
    getAllRiskAssessments,
    getRiskAssessmentByID,
    updateRiskAssessment,
    deleteRiskAssessment
}
