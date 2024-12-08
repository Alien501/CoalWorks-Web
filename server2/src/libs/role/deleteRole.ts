import { Request, RequestHandler, Response } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

const deleteRole: RequestHandler = async (req: Request, res: Response): Promise<any> => {
  try {
    const roleId = parseInt(req.params.roleId);

    // Check if the role exists
    const existingRole = await prisma.role.findUnique({
      where: { roleId },
    });

    if (!existingRole) {
      return res.status(404).json({
        message: "Role not found",
        error: null,
      });
    }

    // Delete the role
    await prisma.role.delete({
      where: { roleId },
    });

    res.status(200).json({
      message: "Role deleted successfully!",
      error: null,
    });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({
      message: "Failed to delete role",
      error: error.message,
    });
  }
};

export {
    deleteRole
}