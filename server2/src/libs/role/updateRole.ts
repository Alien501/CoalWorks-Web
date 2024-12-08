import { Request, RequestHandler, Response } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

const updateRole: RequestHandler = async (req: Request, res: Response) => {
  try {
    const roleId = parseInt(req.params.roleId);

    // Validation schema
    const UpdateRoleSchema = z.object({
      roleName: z
        .string()
        .min(3, "Role name must be minimum 3 characters")
        .optional(),
      description: z
        .string()
        .max(150, "Description can't exceed 150 characters")
        .optional(),
      permissions: z
        .array(
          z.object({
            permissionName: z
              .string()
              .min(3, "Permission name must be at least 3 characters"),
            permission: z
              .object({
                canView: z.boolean(),
                canEdit: z.boolean(),
                canCreate: z.boolean(),
                canDelete: z.boolean(),
              })
              .optional(),
          })
        )
        .optional(),
    });

    // Validate request body
    const validatedData = UpdateRoleSchema.parse(req.body);

    // Update the role in the database
    const updatedRole = await prisma.role.update({
      where: { roleId },
      data: {
        ...validatedData, // Spread validated fields to update
      },
      select: {
        roleName: true,
        roleId: true,
        description: true,
        permissions: true,
      },
    });

    res.status(200).json({
      message: "Role updated successfully!",
      data: updatedRole,
      error: null,
    });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({
      message: "Failed to update role",
      error: error instanceof z.ZodError ? error.errors : error.message,
    });
  }
};

export {
    updateRole
}