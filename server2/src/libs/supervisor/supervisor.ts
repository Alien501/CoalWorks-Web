import { RequestHandler, Response, Request, NextFunction } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

const createSupervisorSchema = z.object({
  userId: z.array(z.number().int("User ID must be an integer")),
  sectionId: z.number().int("Section ID must be an integer")
})
  
  const updateSupervisorSchema = z.object({
    sectionId: z.number().int("Section ID must be an integer").optional(),
  });

// Fetch all supervisors
const getAllSupervisors: RequestHandler = async (req, res) => {
  try {
    const supervisors = await prisma.supervisor.findMany({
      include: {
        user: {
          select: { username: true, email: true },
        },
        section: {
          select: { name: true },
        },
      },
    });

    res.status(200).json({ data: supervisors });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch supervisors" });
  }
};

const getSupervisorById: RequestHandler = async (req, res, next): Promise<any> => {
  const id = Number(req.params.id);

  try {
    const supervisor = await prisma.supervisor.findUnique({
      where: { id },
      include: {
        user: {
          select: { username: true, email: true },
        },
        section: {
          select: { name: true },
        },
      },
    });

    if (!supervisor) {
      return res.status(404).json({ error: "Supervisor not found" });
    }

    res.status(200).json({ data: supervisor });
  } catch (error) {
    next(error)
  }
};

const createSupervisors = async (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  try {
    const validatedData = createSupervisorSchema.parse(req.body);
    const createdSupervisors = await prisma.$transaction(async (prisma) => {
      const supervisors = [];

      //@ts-ignore
      for (const userId of validatedData.userId) {
        const supervisor = await prisma.supervisor.create({
          data: {
            userId,
            sectionId: validatedData.sectionId
          }
        });

        await prisma.user.update({
          where: { userId },
          data: { isSupervisor: true }
        });

        supervisors.push(supervisor);
      }

      return supervisors;
    });

    res.status(201).json({ data: createdSupervisors });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        message: 'Validation error',
        errors: error.errors 
      });
    }

    next(error);
  }
};
// Update a supervisor
const updateSupervisor: RequestHandler = async (req, res, next) => {
  const id = Number(req.params.id);

  try {
    const validatedData = updateSupervisorSchema.parse(req.body);

    const updatedSupervisor = await prisma.supervisor.update({
      where: { id },
      data: validatedData,
    });

    res.status(200).json({ data: updatedSupervisor });
  } catch (error: any) {
    next(error)
  }
};

// Delete a supervisor
const deleteSupervisor: RequestHandler = async (req, res, next) => {
  const id = Number(req.params.id);

  try {
    await prisma.supervisor.delete({
      where: { id },
    });

    res.status(200).json({ message: "Supervisor deleted successfully" });
  } catch (error) {
    next(error)
  }
};

export {
  getAllSupervisors,
  getSupervisorById,
  createSupervisors,
  updateSupervisor,
  deleteSupervisor,
};
