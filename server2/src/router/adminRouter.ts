import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { adminLogin } from "../libs/admin/login";
import { adminVerifyToken } from "../utils/passwordUtils";

const adminRouter = Router();

/**
 * @swagger
 * /admin/op/login:
 *   post:
 *     summary: Admin Login
 *     description: Authenticates an admin using email and password and returns a JWT token on successful login.
 *     tags:
 *       - Admin Operations
 *     requestBody:
 *       description: Credentials for logging in as an admin.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "admin@example.com"
 *               password:
 *                 type: string
 *                 example: "Password123!"
 *     responses:
 *       200:
 *         description: Login successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 user:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: string
 *                       example: "12345"
 *                     username:
 *                       type: string
 *                       example: "Admin User"
 *                     email:
 *                       type: string
 *                       example: "admin@example.com"
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Invalid credentials.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Invalid credentials"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */
adminRouter.post('/login', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await adminLogin(req, res);
}))

/**
 * @swagger
 * /admin/op/verify:
 *   get:
 *     summary: Verify Admin Token
 *     description: Verifies the admin's JWT token to ensure it is valid and not expired.
 *     tags:
 *       - Admin Operations
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token verification successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Token is valid"
 *       401:
 *         description: Invalid or expired token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Invalid or expired token"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */
adminRouter.get('/verify', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await adminVerifyToken(req, res, next);
}))

export {
    adminRouter
}