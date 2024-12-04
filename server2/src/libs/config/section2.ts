import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

const sectionSchema = z.object({
  name: z.string().min(1, "Section name is required"),
  sectionType: z.number().int("Section type must be an integer"),
  area: z.number().int("Area must be an integer").optional(),
});

/**
 * Create a Section
 */
export const createSection = async (req: Request, res: Response) => {
  try {
    const data = sectionSchema.parse(req.body);
    const section = await prisma.section.create({ data });
    res.status(201).json(section);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      res.status(500).json({ error: "Failed to create section" });
    }
  }
};

/**
 * Get all Sections
 */
export const getAllSections = async (req: Request, res: Response) => {
  try {
    const sections = await prisma.section.findMany({
      include: {
        type: true,
        assets: true,
        coordinates: true,
        activePlans: true,
      },
    });
    res.status(200).json(sections);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sections" });
  }
};

/**
 * Get a Section by ID
 */
export const getSectionById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const section = await prisma.section.findUnique({
      where: { id },
      include: {
        type: true,
        assets: true,
        coordinates: true,
        activePlans: true,
      },
    });
    if (!section) {
      return res.status(404).json({ error: "Section not found" });
    }
    res.status(200).json(section);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch section" });
  }
};

/**
 * Update a Section by ID
 */
export const updateSection = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = sectionSchema.parse(req.body);
    const section = await prisma.section.update({
      where: { id },
      data,
    });
    res.status(200).json(section);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    // } else if (error.code === "P2025") {
    //   res.status(404).json({ error: "Section not found" });
    } else {
      res.status(500).json({ error: "Failed to update section" });
    }
  }
};

/**
 * Delete a Section by ID
 */
export const deleteSection = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.section.delete({
      where: { id },
    });
    res.status(200).json({ message: "Section deleted successfully" });
  } catch (error) {
      res.status(500).json({ error: "Failed to delete section" });
  }
};
