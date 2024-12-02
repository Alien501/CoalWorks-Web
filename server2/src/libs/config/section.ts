import { Request, Response, NextFunction, RequestHandler } from "express";
import { prisma } from "../../utils/prisma";
import z from "zod";

const SectionSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  sectionType: z.number().int().positive("Section type must be a positive integer"),
  area: z.number().int().optional(),
});

const SectionUpdateSchema = SectionSchema.partial();

const createSection: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const validatedData = SectionSchema.parse(req.body);
    const section = await prisma.section.create({
      data: validatedData,
    });
    res.status(201).json(section);
  } catch (error: any) {
    next(error);
  }
};


const getSections: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const sections = await prisma.section.findMany({
      include: { type: true, assets: true, coordinates: true },
    });
    res.status(200).json(sections);
  } catch (error: any) {
    next(error);
  }``
};


const getSectionById: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  try {
    const section = await prisma.section.findUnique({
      where: { id },
      include: { type: true, assets: true, coordinates: true },
    });

    if (!section) return res.status(404).json({ error: "Section not found" });
    res.status(200).json(section);
  } catch (error: any) {
    next(error);
  }
};

// Update Section
const updateSection: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  try {
    const validatedData = SectionUpdateSchema.parse(req.body);

    const section = await prisma.section.update({
      where: { id },
      data: validatedData,
    });

    res.status(200).json(section);
  } catch (error: any) {
    next(error);
  }
};

// Delete Section
const deleteSection: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  try {
    await prisma.section.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error: any) {
    next(error);
  }
};

export {
  createSection,
  getSections,
  getSectionById,
  deleteSection,
  updateSection,
}
