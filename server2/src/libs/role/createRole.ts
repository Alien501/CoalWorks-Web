import { Request, RequestHandler, Response } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

const PermissionSchema = z.object({
    permissionName: z.string().min(3, "Permission name must be atleast 3 characters long"),
    permission: z.object({
        canView: z.boolean(),
        canEdit: z.boolean(),
        canCreate: z.boolean(),
        canDelete: z.boolean()
    })
})

const CreateRoleSchema = z.object({
    roleName: z.string().min(3, 'Role name must be minimum 3 characters'),
    description: z.string().max(150, "Description can't exceed 150 characters"),
    permissions: z.array(PermissionSchema)
})

const createRole: RequestHandler = async (req: Request, res: Response) => {
    console.log(req.body)
    const validatedData = CreateRoleSchema.parse(req.body);

    // TODO: need to check if role is created by admin
7
    const newRole = await prisma.role.create({
        data: {
            roleName: validatedData.roleName,
            description: validatedData.description,
            permissions: validatedData.permissions
        },
        select: {
            roleName: true,
            roleId: true
        }
    })

    res.status(201).json({
        message: "Created role successfully!",
        data: newRole,
        error: null
    })
}

export {
    createRole
}