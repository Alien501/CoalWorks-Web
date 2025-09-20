// @ts-nocheck
import crypto from 'crypto';
import { prisma } from './prisma';
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        username: string;
        email: string;
      }
    }
  }
}

interface JwtPayload {
  userId: number;
  username: string;
  email: string;
  iat: number;
  exp: number;
}
const JWT_SECRET: string = 'secret';


export const adminVerifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
      res.status(401).json({
        message: "Not authorised",
        error: "Invalid token",
        data: null
      })
    } else {
      const decoded = jwt.verify(token, JWT_SECRET);
      if(decoded) {
        res.status(200).json({
          message: "Success",
          data: decoded,
          error: null
        })
      }
    }
  } catch (error) {
    console.error(error)
    res.status(401).json({
      message: "Not authorised2",
      error: "Invalid token",
      data: null
    })
  }
};


export function generateSalt(length = 16): string {
  return crypto.randomBytes(length).toString('hex');
}

export function hashPassword(password: string, salt: string): string {
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
  return hash;
}