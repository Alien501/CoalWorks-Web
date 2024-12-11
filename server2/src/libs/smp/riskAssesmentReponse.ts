import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

// GET all responses
export const getAllResponses = async (req: Request, res: Response) => {
  try {
    const responses = await prisma.riskAssessmentResponse.findMany({
      include: {
        user: true,
      },
    });
    res.status(200).json(responses);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch responses." });
  }
};

// GET a single response by ID
export const getResponseByFormId = async (req: Request, res: Response) => {
  console.log(req.params)
  const id = parseInt(req.params.id || req.params.formId);
  console.log(id)
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  try {
    const response = await prisma.riskAssessmentResponse.findMany({
      where: { 
        formId: id
       },
      include: {
        user: true,
      },
    });

    if (!response) return res.status(404).json({ error: "Response not found." });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the response." });
  }
};

export const getResponseById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });
  
    try {
      const response = await prisma.riskAssessmentResponse.findMany({
        where: { id },
        include: {
          user: true,
        },
      });
  
      if (!response) return res.status(404).json({ error: "Response not found." });
  
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch the response." });
    }
  };
  

export const getResponseByUserId = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });
  
    try {
      const response = await prisma.riskAssessmentResponse.findMany({
        where:{
            userId: id
        },
        include: {
          user: true,
        },
      });
  
      if (!response) return res.status(404).json({ error: "Response not found." });
  
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch the response." });
    }
  };

// CREATE a new response
export const createResponse = async (req: Request, res: Response) => {
  const schema = z.object({
    userId: z.number(),
    formId: z.number(),
    response: z.any(),
  });

  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ error: result.error.errors });
  }

  const { userId, formId, response } = result.data;

  try {
    const newResponse = await prisma.riskAssessmentResponse.create({
      data: {
        userId,
        formId,
        response,
      },
    });

    res.status(201).json(newResponse);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to create response." });
  }
};

// UPDATE a response
export const updateResponse = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  const schema = z.object({
    userId: z.number().optional(),
    formId: z.number().optional(),
    response: z.any().optional(),
  });

  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ error: result.error.errors });
  }

  try {
    const updatedResponse = await prisma.riskAssessmentResponse.update({
      where: { id },
      data: result.data,
    });

    res.status(200).json(updatedResponse);
  } catch (error) {
    res.status(500).json({ error: "Failed to update response." });
  }
};

// DELETE a response
export const deleteResponse = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  try {
    await prisma.riskAssessmentResponse.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete response." });
  }
};
