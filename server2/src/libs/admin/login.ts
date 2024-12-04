import { Request, RequestHandler, Response } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { hashPassword } from "../../utils/passwordUtils";
import { prisma } from "../../utils/prisma";

const adminLogin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const superAdmin = await prisma.superAdmin.findFirst({
            where: { 
                email: email
            }
        });

        if (!superAdmin) {
            return res.status(401).json({ 
                success: false, 
                message: "Invalid credentials" 
            });
        }

        const hashedInputPassword = hashPassword(password, superAdmin.salt);
        if (hashedInputPassword !== superAdmin.passwordHash) {
            return res.status(401).json({ 
                success: false, 
                message: "Invalid credentials" 
            });
        }

        const token = jwt.sign(
            {
                userId: superAdmin.id,
                username: superAdmin.name,
                email: superAdmin.email,
            }, 
            process.env.JWT_SECRET || 'default-secret-key', 
            { 
                expiresIn: '1d' 
            }
        );

        res.status(200).json({
            success: true,
            user: {
                userId: superAdmin.id,
                username: superAdmin.name,
                email: superAdmin.email,
            },
            token: token
        });
    } catch (error) {
        console.error('Admin login error:', error);
        res.status(500).json({ 
            success: false, 
            message: "Internal server error" 
        });
    }
};

export {
    adminLogin
}