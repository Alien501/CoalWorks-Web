import { Request, RequestHandler, Response } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

const CreateShiftSchema = z.object({
  name: z.string().min(5, "Shift name should be at least 5 characters long"),
  startTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:MM)"),
  endTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:MM)"),
});

export const createShifts: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const validatedData = CreateShiftSchema.parse(req.body);
  let data;

  const newShift = await prisma.shift.create({
    data: {
      ...validatedData,
    },
    select: {
      name: true,
      shiftId: true,
      startTime: true,
      endTime: true,
      isActive: true,
    },
  });

  res.status(201).json({
    message: "Created new shift successfully!",
    data: newShift,
    error: null,
  });
};

export const assignShiftsToSection = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { sectionId, assignments } = req.body;

    // Validate input
    if (!sectionId || !Array.isArray(assignments)) {
      return res.status(400).json({
        message: "Invalid input",
        error: "Section ID and assignments array are required",
      });
    }

    // Start a transaction to ensure data integrity
    const result = await prisma.$transaction(async (prisma) => {
      // First, check for and remove any existing conflicting assignments
      const existingAssignments = await prisma.shiftAssignment.findMany({
        where: {
          sectionId: sectionId,
          shiftId: {
            in: assignments.map((assignment) => assignment.shiftId),
          },
        },
      });

      if (existingAssignments.length > 0) {
        // Delete existing conflicting assignments
        await prisma.shiftAssignment.deleteMany({
          where: {
            id: {
              in: existingAssignments.map((assignment) => assignment.id),
            },
          },
        });
      }

      // Create new shift assignments
      const shiftAssignments = await Promise.all(
        assignments.map(async (assignment) => {
          const shiftAssignment = await prisma.shiftAssignment.create({
            data: {
              sectionId: sectionId,
              shiftId: assignment.shiftId,
              supervisorId: assignment.userId,
              operators: {
                create: assignment.operatorIds.map((operatorId: any) => ({
                  operatorId: operatorId,
                })),
              },
            },
            include: {
              operators: true,
            },
          });

          return shiftAssignment;
        })
      );

      return shiftAssignments;
    });

    return res.status(201).json({
      message: "Shift assignments created successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error in shift assignment:", error);
    return res.status(500).json({
      message: "Failed to assign shifts",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getShiftAssignmentsBySectionAndShift = async (
  req: Request,
  res: Response
) => {
  try {
    const { sectionId, shiftId } = req.params;

    // Validate input
    if (!sectionId || !shiftId) {
      return res.status(400).json({
        message: "Invalid input",
        error: "Section ID and Shift ID are required",
      });
    }

    // Fetch shift assignments with detailed information
    const shiftAssignments = await prisma.shiftAssignment.findMany({
      where: {
        sectionId: parseInt(sectionId),
        shiftId: parseInt(shiftId),
      },
      include: {
        // Include related models
        section: {
          select: {
            id: true,
            name: true,
          },
        },
        shift: {
          select: {
            shiftId: true,
            name: true,
            startTime: true,
            endTime: true,
          },
        },
        supervisor: {
          select: {
            userId: true,
            username: true,
            email: true,
            isSupervisor: true,
          },
        },
        operators: {
          include: {
            operator: {
              select: {
                userId: true,
                username: true,
                email: true,
                isSupervisor: true,
                Position: {
                  select: {
                    positionId: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    // Transform data to a more readable format
    const formattedAssignments = shiftAssignments.map((assignment) => ({
      id: assignment.id,
      section: {
        id: assignment.section.id,
        name: assignment.section.name,
      },
      shift: {
        id: assignment.shift.shiftId,
        name: assignment.shift.name,
        startTime: assignment.shift.startTime,
        endTime: assignment.shift.endTime,
      },
      supervisor: assignment.supervisor,
      operators: assignment.operators.map((op) => op.operator),
    }));

    res.status(200).json({
      message: "Shift assignments retrieved successfully",
      data: formattedAssignments,
    });
  } catch (error) {
    console.error("Error retrieving shift assignments:", error);
    res.status(500).json({
      message: "Failed to retrieve shift assignments",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
