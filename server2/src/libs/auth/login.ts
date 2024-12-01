// @ts-nocheck
import { Request, RequestHandler, Response } from 'express';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
});

const login = async (req: Request, res: Response) => {
    try {
        const validatedData = LoginSchema.parse(req.body);

        const user = await prisma.user.findUnique({
            where: { email: validatedData.email }
        });

        if (!user) {
            return res.status(401).json({ 
                error: 'Invalid email or password',
                success: false 
            });
        }

        // if (!user.isActive) {
        //     return res.status(403).json({ 
        //         error: 'Account is inactive',
        //         success: false 
        //     });
        // }

        const isPasswordValid = await bcrypt.compare(
            validatedData.password, 
            user.passwordHash
        );

        if (!isPasswordValid) {
            return res.status(401).json({ 
                error: 'Invalid email or password',
                success: false 
            });
        }

        await prisma.user.update({
            where: { userId: user.userId },
            data: { lastLogin: new Date() }
        });

        const { passwordHash, salt, createdAt, updatedAt, createdBy, ...userWithoutSensitiveData } = user;

        // const token = generateAuthToken(user);

        return res.status(200).json({
            success: true,
            user: userWithoutSensitiveData
        });

    } catch (error) {
        console.error('Login error:', error);

        if (error instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                error: 'Invalid input',
                details: error.errors
            });
        }

        return res.status(500).json({ 
            success: false,
            error: 'Internal server error' 
        });
    }
};

export {
    login
}