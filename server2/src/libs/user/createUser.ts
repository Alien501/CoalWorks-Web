import { RequestHandler, Response, Request } from "express";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "../../utils/prisma";


const CreateUserSchema = z.object({
    username: z.string().min(3, "Username must be atleast 3 characters"),
    email: z.string().email("Inavlid email format"),
    phone: z.string().optional(),
    password: z.string().min(8, "Password must be atleast 8 characters"),
    userRoleId: z.number().int("User role must be a valid interger"),
    positionId: z.number().int("Position must be a valid integer").optional(),
    createdBy: z.number().int("Creator ID invalid")
})

const generatePasswordHash: (password: string) => Promise<{salt: string, passwordHash: string}> = async (password: string) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHash = await bcrypt.hash(password, salt);
    return {
        salt,
        passwordHash
    };
}

const createUser: RequestHandler = async (req: Request, res: Response) => {
    const validateData = CreateUserSchema.parse(req.body);

    const {salt, passwordHash} = await generatePasswordHash(validateData.password);
    const newUser = await prisma.user.create(
        {
            data: {
                email: validateData.email,
                username: validateData.username,
                phone: validateData.phone,
                positionId: validateData.positionId,
                userRoleId: validateData.userRoleId,
                salt,
                passwordHash
            },
            select: {
                userId: true,
                username: true,
                email: true
            }
        }
    )

    res.status(201).json({
        message: 'User created successfully!',
        data: newUser
    })
}

export {
    createUser
}
