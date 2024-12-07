import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

const activePlanSchema = z.object({
  planName: z.string().min(1, "Plan Name is required"),
  planId: z.number().int("Plan ID must be an integer"),
  sectionIds: z.array(z.number().int("Section ID must be an integer")).min(1, "At least one section is required"),
});

export const createOrUpdateActivePlans = async (req: Request, res: Response) => {
  try {
    const { planName, planId, sectionIds } = activePlanSchema.parse(req.body);

    const result = await prisma.$transaction(async (prisma) => {
      await prisma.activePlans.deleteMany({
        where: { planId }
      });

      const activePlans = await Promise.all(sectionIds.map(async (sectionId) => {
        return prisma.activePlans.create({
          data: {
            planName,
            planId,
            sectionId,
          }
        });
      }));

      return activePlans;
    });

    console.log(result)

    res.status(201).json(result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Failed to create/update active plans" });
    }
  }
};

export const getActivePlansByPlanId = async (req: Request, res: Response) => {
  try {
    const planId = parseInt(req.params.planId);
    const activePlans = await prisma.activePlans.findMany({
      where: { planId },
      include: { 
        plan: true, 
        section: true 
      },
    });
    
    if (activePlans.length === 0) {
      return res.status(404).json({ error: "No Active Plans found for this plan" });
    }
    
    res.status(200).json(activePlans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch active plans" });
  }
};

export const deleteActivePlansForPlan = async (req: Request, res: Response) => {
  try {
    const planId = parseInt(req.params.planId);
    
    const deletedActivePlans = await prisma.activePlans.deleteMany({
      where: { planId }
    });
    
    res.status(200).json({ 
      message: "Active Plans deleted successfully", 
      count: deletedActivePlans.count 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete active plans" });
  }
};