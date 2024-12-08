import { Request, RequestHandler, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

export const assignUsersToSection = async (req: Request, res: Response) => {
  try {
    const { userIds, sectionId } = req.body;
    console.log("reaches here")

    if (!userIds || !Array.isArray(userIds) || !sectionId) {
      return res.status(400).json({ message: "Invalid input data." });
    }

    const assignments = userIds.map((userId: number) => ({
      userId,
      sectionId,
    }));

    await prisma.sectionUsers.createMany({
      data: assignments,
      skipDuplicates: true,
    });

    res
      .status(200)
      .json({ message: "Users successfully assigned to the section." });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while assigning users to the section.",
    });
  }
};

export const getAllUsersOfSection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const section = await prisma.section.findUnique({
        where: { id: parseInt(id) },
        include: {
          users: {
            where: {
              user: {
                isSupervisor: false,  
              },
            },
            select: {
              userId: true,  
              user:{
                select:{
                    username: true,
                    email: true,
                    phone: true,
                    isSupervisor: true
                }
              }
            },
          },
        },
      });

    if (!section) {
      return res.status(404).json({ message: "Section not found." });
    }

    res.status(200).json(section.users);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while fetching users of the section.",
    });
  }
};

export const removeUsersFromSection = async (req: Request, res: Response) => {
  try {
    const { userIds, sectionId } = req.body;

    if (!userIds || !Array.isArray(userIds) || !sectionId) {
      return res.status(400).json({ message: "Invalid input data." });
    }

    await prisma.sectionUsers.deleteMany({
      where: {
        userId: { in: userIds },
        sectionId: parseInt(sectionId),
      },
    });

    res
      .status(200)
      .json({ message: "Users successfully removed from the section." });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while removing users from the section.",
    });
  }
};

export const getSectionsOfUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const sections = await prisma.sectionUsers.findMany({
      where: { userId: parseInt(userId) },
      include: {
        section: {
          select: {
            id: true,
            name: true,
            area: true,
          },
        },
      },
    });

    if (!sections.length) {
      return res
        .status(404)
        .json({ message: "No sections found for the user." });
    }

    res.status(200).json(sections.map((entry) => entry.section));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        error: "An error occurred while fetching sections of the user.",
      });
  }
};
