import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createUser, assignUserToSection } from "../libs/user/createUser";
import { getAllUsers } from "../libs/user/getUser";

const userRouter = Router();

/**
 * @swagger
 * /user/create:
 *   post:
 *     summary: Create a new user
 *     description: Creates a new user with the provided details including username, email, password, and role.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user. Must be at least 3 characters long.
 *                 example: "john_doe"
 *               email:
 *                 type: string
 *                 description: The email of the user. Must be a valid email format.
 *                 example: "john.doe@example.com"
 *               phone:
 *                 type: string
 *                 description: The phone number of the user.
 *                 example: "+1234567890"
 *               password:
 *                 type: string
 *                 description: The password of the user. Must be at least 8 characters long.
 *                 example: "password123"
 *               userRoleId:
 *                 type: integer
 *                 description: The ID of the user role.
 *                 example: 1
 *               positionId:
 *                 type: integer
 *                 description: The ID of the user's position, if applicable.
 *                 example: 2
 *     responses:
 *       201:
 *         description: The user was created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User created successfully!"
 *                 data:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: integer
 *                       description: The unique ID of the created user.
 *                       example: 1
 *                     username:
 *                       type: string
 *                       description: The username of the created user.
 *                       example: "john_doe"
 *                     email:
 *                       type: string
 *                       description: The email of the created user.
 *                       example: "john.doe@example.com"
 *       400:
 *         description: Invalid input data.
 *       500:
 *         description: Internal server error.
 */
userRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createUser(req, res, next);
}))

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get all users
 *     description: Fetches a list of all users along with their associated sections and roles.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: integer
 *                     description: The unique ID of the user.
 *                     example: 1
 *                   username:
 *                     type: string
 *                     description: The username of the user.
 *                     example: "john_doe"
 *                   email:
 *                     type: string
 *                     description: The email of the user.
 *                     example: "john.doe@example.com"
 *                   sections:
 *                     type: array
 *                     items:
 *                       type: object
 *                       description: A list of sections the user is assigned to.
 *                   userRole:
 *                     type: object
 *                     properties:
 *                       roleName:
 *                         type: string
 *                         description: The name of the user's role.
 *                         example: "Admin"
 *       500:
 *         description: Internal server error.
 */
userRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllUsers(req, res, next);
}))

/**
 * @swagger
 * /user/assign-section:
 *   post:
 *     summary: Assign users to a section
 *     description: Assigns multiple users to a specific section.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userIds:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 description: A list of user IDs to assign to the section.
 *                 example: [1, 2, 3]
 *               sectionId:
 *                 type: integer
 *                 description: The ID of the section to assign users to.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Users were successfully assigned to the section.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Users assigned to section successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     description: The updated user details with assigned sections.
 *       400:
 *         description: Invalid input data or missing required fields.
 *       500:
 *         description: Internal server error.
 */
userRouter.post('/assign-section', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await assignUserToSection(req, res, next);
}))

export {
    userRouter
}