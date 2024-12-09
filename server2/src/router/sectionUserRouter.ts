import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { 
  assignUsersToSection, 
  getAllUsersOfSection, 
  getSectionsOfUser, 
  removeUsersFromSection 
} from "../libs/config/sectionUser";

const sectionUserRouter = Router();

/**
 * @swagger
 * tags:
 *   - name: Section User
 */

/**
 * @swagger
 * path:
 * /sectionUser/{id}/users:
 *   get:
 *     summary: Get all users of a specific section
 *     description: Fetches all users of the section excluding supervisors.
 *     tags: [Section Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the section
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully fetched users of the section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Users fetched successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       userId:
 *                         type: integer
 *                         example: 1
 *                       user:
 *                         type: object
 *                         properties:
 *                           username:
 *                             type: string
 *                             example: "johndoe"
 *                           email:
 *                             type: string
 *                             example: "johndoe@example.com"
 *                           phone:
 *                             type: string
 *                             example: "123-456-7890"
 *                           isSupervisor:
 *                             type: boolean
 *                             example: false
 *       404:
 *         description: Section not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Section not found
 */
sectionUserRouter.get('/:id/users', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  await getAllUsersOfSection(req, res);
}));

/**
 * @swagger
 * path:
 * /sectionUser/assign:
 *   post:
 *     summary: Assign users to a section
 *     description: Assigns multiple users to a section based on user IDs and section ID.
 *     tags: [Section Users]
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
 *                   example: [1, 2, 3]
 *                 description: Array of user IDs to be assigned
 *               sectionId:
 *                 type: integer
 *                 description: The section ID to assign users to
 *                 example: 1
 *     responses:
 *       200:
 *         description: Users successfully assigned to the section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Users successfully assigned to the section."
 *       400:
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid input data."
 *       500:
 *         description: Server error while assigning users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "An error occurred while assigning users to the section."
 */
sectionUserRouter.post('/assign', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    console.log("reaches the route")
  await assignUsersToSection(req, res);
}));

/**
 * @swagger
 * path:
 * /sectionUser/remove:
 *   delete:
 *     summary: Remove users from a section
 *     description: Removes multiple users from a section based on user IDs and section ID.
 *     tags: [Section Users]
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
 *                   example: [1, 2]
 *                 description: Array of user IDs to be removed
 *               sectionId:
 *                 type: integer
 *                 description: The section ID to remove users from
 *                 example: 1
 *     responses:
 *       200:
 *         description: Users successfully removed from the section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Users successfully removed from the section."
 *       400:
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid input data."
 *       500:
 *         description: Server error while removing users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "An error occurred while removing users from the section."
 */
sectionUserRouter.delete('/remove', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  await removeUsersFromSection(req, res);
}));

/**
 * @swagger
 * path:
 * /sectionUser/user/{userId}/sections:
 *   get:
 *     summary: Get all sections of a user
 *     description: Fetches all sections the specified user is a part of.
 *     tags: [Section Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: The ID of the user
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully fetched sections for the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Sections fetched successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "Section A"
 *                       area:
 *                         type: string
 *                         example: "Building 1"
 *       404:
 *         description: No sections found for the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No sections found for the user."
 */
sectionUserRouter.get('/user/:userId/sections', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  await getSectionsOfUser(req, res);
}));

export {
  sectionUserRouter
};
