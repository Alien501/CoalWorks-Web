import { Request, RequestHandler, Response } from "express";
import jwt from "jsonwebtoken";
import { hashPassword } from "../../utils/passwordUtils";
import { prisma } from "../../utils/prisma";

const adminLogin = async (req: Request, res: Response) => {
    try {
        console.log("Admin login request body:", req.body);
        const { email, password } = req.body;

        // Validate required fields
        if (!email || !password) {
            console.log("Missing fields - email:", email, "password:", password);
            return res.status(400).json({ 
                success: false, 
                message: "Email and password are required" 
            });
        }

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

        let hashedInputPassword;
        try {
            hashedInputPassword = hashPassword(password, superAdmin.salt);
        } catch (error) {
            console.error('Password hashing error:', error);
            return res.status(500).json({ 
                success: false, 
                message: "Internal server error during authentication" 
            });
        }

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
            'secret', 
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