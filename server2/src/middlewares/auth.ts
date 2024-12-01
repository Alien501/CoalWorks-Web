import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

configDotenv();

const JWT_SECRET: string = process.env.JWT_SECRET || 'secret';

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.split(' ')[1];
        console.log(token)
        if(!token) {
            res.status(401).json({
                message: "Not authorised",
                error: "Invalid token",
                data: null
            })
        }else {
            const decoded = jwt.verify(token, JWT_SECRET);
            console.log(decoded)
            next();
        }
    } catch (error) {
        console.error(error)
        res.status(401).json({
            message: "Not authorised2",
            error: "Invalid token",
            data: null
        })
    }
}

const generateJwtToken = (payload: any) => {
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '24hr'
    })
    return token;
}

export {
    verifyToken,
    generateJwtToken
}