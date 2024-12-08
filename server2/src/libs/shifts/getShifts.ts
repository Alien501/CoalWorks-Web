import { Request, RequestHandler, Response } from "express";
import { prisma } from "../../utils/prisma";

const getShifts: RequestHandler = async (req: Request, res: Response) => {
  const shits = await prisma.shift.findMany({
    select: {
      name: true,
      isActive: true,
      shiftId: true,
      startTime: true,
      endTime: true,
    },
  });

  res.status(200).json({
    message: "Fetched shifts successfully!",
    data: shits,
    error: null,
  });
};

const getUserDetailsByShiftAndSection: RequestHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { shiftId, sectionId } = req.query;

    // Validate input
    if (!shiftId || !sectionId) {
      return res.status(400).json({
        error: "Both shiftId and sectionId are required",
      });
    }

    // Convert to numbers
    const parsedShiftId = parseInt(shiftId as string, 10);
    const parsedSectionId = parseInt(sectionId as string, 10);

    // Fetch users
    const users = await prisma.user.findMany({
      where: {
        // Filter by section
        sections: {
          some: {
            sectionId: parsedSectionId,
          },
        },
        // Filter by shift
        shifts: {
          some: {
            shiftId: parsedShiftId,
          },
        },
      },
      select: {
        userId: true,
        username: true,
        email: true,
        phone: true,
        isSupervisor: true,
        // Add any other fields you want to include
      },
    });

    // If no users found
    if (users.length === 0) {
      return res.status(404).json({
        message: "No users found for the given shift and section",
      });
    }

    res.json({
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching shift section users:", error);
    res.status(500).json({
      error: "Internal server error",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
const getShiftDetails: RequestHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
  const shifts = await prisma.shift.findMany({
    select: {
      shiftId: true,
      name: true,
      startTime: true,
      endTime: true,
      isActive: true,
      users: {
        select: {
          user:{
            select:{
                username: true,
                userRole: true,
                userId: true,
                userRoleId: true
            }
          }
        },
      },
    },
    // Optional: Add ordering
    orderBy: {
      shiftId: "asc",
    },
  });
  return res.status(200).json(shifts)
};

export { getShifts, getUserDetailsByShiftAndSection, getShiftDetails };
