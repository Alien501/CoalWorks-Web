//@ts-nocheck
import express from "express";
import { prisma } from "../../utils/prisma";

// Create a new shift template
export const createNewShiftTemplate = async (req: Request, res: Response) => {
  try {
    const { positionId, sectionId, shiftTemplate } = req.body;
    const shiftTemplateResponse = await prisma.shiftTemplate.create({
      data: {
        shiftId: 1,
        roleId: positionId,
        sectionId,
        shiftTemplate: shiftTemplate
      },
      select:{
        section: true,
        createdAt: true,
      }
    });

    res.status(201).json({
      message: "Shift template created successfully",
      data: shiftTemplate,
    });
  } catch (error) {
    console.error("Error creating shift template:", error);
    console.log(error)
    res.status(500).json({
      message: "Failed to create shift template",
      error: (error as Error).message,
    });
  }
};

// Get all shift templates for a section
export const getAllShiftTemplates = async (req: Request, res: Response) => {
  try {
    const templates = await prisma.shiftTemplate.findMany({
      include: {
        section: true,
        role: true
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      message: "Shift templates retrieved successfully",
      data: templates,
    });
  } catch (error) {
    console.error("Error retrieving shift templates:", error);
    res.status(500).json({
      
      message: "Failed to retrieve shift templates",
      error: (error as Error).message,
    });
  }
};

// Get a specific shift template by ID
export const getShiftTemplateById = async (req: Request, res: Response) => {
  try {
    const { templateId } = req.params;
    const template = await prisma.shiftTemplate.findUnique({
      where: {
        id: parseInt(templateId),
      },
      include: {
        questions: true,
        shift: true,
        section: true,
        creator: {
          select: {
            userId: true,
            username: true,
          },
        },
      },
    });

    if (!template) {
      return res.status(404).json({
        message: "Shift template not found",
      });
    }

    res.json({
      message: "Shift template retrieved successfully",
      data: template,
    });
  } catch (error) {
    console.error("Error retrieving shift template:", error);
    res.status(500).json({
      message: "Failed to retrieve shift template",
      error: (error as Error).message,
    });
  }
};

// Update a shift template
export const updateShiftTemplate = async (req: Request, res: Response) => {
  try {
    const { templateId } = req.params;
    const { shiftId } = req.body;

    // Delete existing questions and create new ones
    const updatedTemplate = await prisma.shiftTemplate.update({
      where: { id: parseInt(templateId) },
      data: {
        shiftId,
      },
      include: {
        shift: true,
        section: true,
      },
    });

    res.status(200).json({
      message: "Shift template updated successfully",
      data: updatedTemplate,
    });
  } catch (error) {
    console.error("Error updating shift template:", error);
    res.status(500).json({
      message: "Failed to update shift template",
      error: (error as Error).message,
    });
  }
};

// Delete a shift template
export const deleteShiftTemplate = async (req: Request, res: Response) => {
  try {
    const { templateId } = req.params;
    await prisma.shiftTemplate.delete({
      where: {
        id: parseInt(templateId),
      },
    });

    res.json({
      message: "Shift template deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting shift template:", error);
    res.status(500).json({
      message: "Failed to delete shift template",
      error: (error as Error).message,
    });
  }
};
