import { Request, Response, NextFunction, RequestHandler } from "express";
import { prisma } from "../../utils/prisma";
import z from "zod";

// Validation schemas
const SectionTypeSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  description: z.string().min(1, "Description is required").max(255),
});

const SectionTypeUpdateSchema = SectionTypeSchema.partial();

// Create SectionType
const createSectionType: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    console.log("reaches here")
    const validatedData = SectionTypeSchema.parse(req.body);
    const sectionType = await prisma.sectionType.create({
      data: validatedData,
    });
    res.status(201).json(sectionType);
  } catch (error: any) {
    next(error);
  }
};

// Get all SectionTypes
const getSectionTypes: RequestHandler = async (_req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const sectionTypes = await prisma.sectionType.findMany({
      include: { sections: true },
    });
    res.status(200).json(sectionTypes);
  } catch (error: any) {
    next(error);
  }
};

// Get SectionType by ID
const getSectionTypeById: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  try {
    const sectionType = await prisma.sectionType.findUnique({
      where: { id },
      include: { sections: true },
    });

    if (!sectionType) return res.status(404).json({ error: "SectionType not found" });
    res.status(200).json(sectionType);
  } catch (error: any) {
    next(error);
  }
};

// Update SectionType
const updateSectionType: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  try {
    const validatedData = SectionTypeUpdateSchema.parse(req.body);

    const sectionType = await prisma.sectionType.update({
      where: { id },
      data: validatedData,
    });

    res.status(200).json(sectionType);
  } catch (error: any) {
    next(error);
  }
};

// Delete SectionType
const deleteSectionType: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  try {
    await prisma.sectionType.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error: any) {
    next(error);
  }
};

export{
    createSectionType,
    getSectionTypes,
    getSectionTypeById,
    updateSectionType,
    deleteSectionType
}
