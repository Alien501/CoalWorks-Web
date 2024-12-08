import { Request, RequestHandler, Response } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

// Define the schema for a single permission
const PermissionSchema = z.object({
  permissionName: z
    .string()
    .min(3, "Permission name must be at least 3 characters long"),
  permission: z
    .object({
      canView: z.boolean(),
      canEdit: z.boolean(),
      canCreate: z.boolean(),
      canDelete: z.boolean(),
    })
    .optional(), // Marking this as optional
});

// Define the schema for creating a role
const CreateRoleSchema = z.object({
  roleName: z.string().min(3, "Role name must be minimum 3 characters"),
  description: z.string().max(150, "Description can't exceed 150 characters"),
  permissions: z.array(PermissionSchema).optional(), // Optional list of permissions
});

const createRole: RequestHandler = async (req: Request, res: Response) => {
  try {
    // Parse and validate the request body
    const validatedData = CreateRoleSchema.parse(req.body);

    // Prepare the permissions JSON if provided
    const permissionsJson = validatedData.permissions || [];

    // Create the role in the database
    const newRole = await prisma.role.create({
      data: {
        roleName: validatedData.roleName,
        description: validatedData.description,
        permissions: permissionsJson, 
      },
      select: {
        roleName: true,
        roleId: true,
      },
    });

    // Respond with success
    res.status(201).json({
      message: "Created role successfully!",
      data: newRole,
      error: null,
    });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({
      message: "Failed to create role",
      error: error instanceof z.ZodError ? error.errors : error.message,
    });
  }
};

export { createRole };

// Previous router below, above code is newly created

// import { Request, RequestHandler, Response } from "express";
// import { z } from "zod";
// import { prisma } from "../../utils/prisma";

// const PermissionSchema = z.object({
//     permissionName: z.string().min(3, "Permission name must be atleast 3 characters long"),
//     permission: z.object({
//         canView: z.boolean(),
//         canEdit: z.boolean(),
//         canCreate: z.boolean(),
//         canDelete: z.boolean()
//     })
// }).optional()  // making this as optional for now

// const CreateRoleSchema = z.object({
//     roleName: z.string().min(3, 'Role name must be minimum 3 characters'),
//     description: z.string().max(150, "Description can't exceed 150 characters"),
//     permissions: z.array(PermissionSchema).optional() // making this as optional for now
// })

// const createRole: RequestHandler = async (req: Request, res: Response) => {
//     console.log(req.body)
//     const validatedData = CreateRoleSchema.parse(req.body);

//     // TODO: need to check if role is created by admin
//     const newRole = await prisma.role.create({
//         data: {
//             roleName: validatedData.roleName,
//             description: validatedData.description,
//             permissions: validatedData.permissions
//         },
//         select: {
//             roleName: true,
//             roleId: true
//         }
//     })

//     res.status(201).json({
//         message: "Created role successfully!",
//         data: newRole,
//         error: null
//     })
// }

// export {
//     createRole
// }
