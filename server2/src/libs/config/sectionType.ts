import { z } from "zod";
import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

const sectionTypeSchema = z.object({
  name: z.string().max(255, "Name must be 255 characters or less"),
  description: z.string().max(255, "Description must be 255 characters or less"),
});

const sectionTypeUpdateSchema = z.object({
  name: z.string().max(255, "Name must be 255 characters or less").optional(),
  description: z.string().max(255, "Description must be 255 characters or less").optional(),
});

const sectionColorSchema = z.object({
  hex: z.string().regex(/^#([0-9A-F]{3}|[0-9A-F]{6})$/i, "Invalid hex color"),
  sectionId: z.number(),
});


export const createSectionType = async (req: Request, res: Response) => {
  try {
    const data = sectionTypeSchema.parse(req.body);
    const sectionType = await prisma.sectionType.create({ data });
    res.status(201).json(sectionType);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const getAllSectionTypes = async (_req: Request, res: Response) => {
  try {
    const sectionTypes = await prisma.sectionType.findMany({
      include: { sections: true, color: true },
    });
    res.status(200).json({
      message: "Done!",
      data: sectionTypes
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getSectionTypeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const sectionType = await prisma.sectionType.findUnique({
      where: { id: Number(id) },
      include: { sections: true, color: true },
    });
    if (!sectionType) {
      return res.status(404).json({ error: "SectionType not found" });
    }
    res.status(200).json(sectionType);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateSectionType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = sectionTypeUpdateSchema.parse(req.body);
    const sectionType = await prisma.sectionType.update({
      where: { id: Number(id) },
      data,
    });
    res.status(200).json(sectionType);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const deleteSectionType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.sectionType.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const createSectionColor = async (req: Request, res: Response) => {
  try {
    const data = sectionColorSchema.parse(req.body);
    const sectionColor = await prisma.sectionColor.create({ data });
    res.status(201).json(sectionColor);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const getAllSectionColors = async (_req: Request, res: Response) => {
  try {
    const sectionColors = await prisma.sectionColor.findMany({
      include: { sectionType: true },
    });
    res.status(200).json(sectionColors);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getSectionColorById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const sectionColor = await prisma.sectionColor.findUnique({
      where: { id: Number(id) },
      include: { sectionType: true },
    });
    if (!sectionColor) {
      return res.status(404).json({ error: "SectionColor not found" });
    }
    res.status(200).json(sectionColor);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateSectionColor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = sectionColorSchema.partial().parse(req.body);
    const sectionColor = await prisma.sectionColor.update({
      where: { id: Number(id) },
      data,
    });
    res.status(200).json(sectionColor);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const deleteSectionColor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.sectionColor.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error });
  }
};