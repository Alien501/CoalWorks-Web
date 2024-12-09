import { NextFunction, Response, Request, Router } from "express";
import { login } from "../libs/auth/login";
import { asyncHandler } from "../utils/asyncHandler";

const authRouter = Router();
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     description: Authenticates a user and returns a JWT token along with user details.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       description: Login credentials
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The user's password
 *                 example: Password123!
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login successful
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
 *                   description: User data excluding sensitive fields
 *                   properties:
 *                     userId:
 *                       type: string
 *                       example: "123456"
 *                     email:
 *                       type: string
 *                       example: user@example.com
 *                     isActive:
 *                       type: boolean
 *                       example: true
 *                 token:
 *                   type: string
 *                   description: JWT token for user authentication
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: Invalid input
 *                 details:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       message:
 *                         type: string
 *                         example: Invalid email format
 *                       path:
 *                         type: array
 *                         items:
 *                           type: string
 *                           example: email
 *       401:
 *         description: Invalid email or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: Invalid email or password
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: Internal server error
 */
// Auth route
authRouter.post('/login', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await login(req, res, next);
}))

export {
    authRouter
}