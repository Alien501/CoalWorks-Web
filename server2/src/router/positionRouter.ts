import { Router, Response, Request, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { getPositions } from "../libs/position/getPositions";
import { createPosition } from "../libs/position/createPosition";
import { updatePosition } from "../libs/position/updatePosition";

const positionRouter  = Router();

/**
 * @swagger
 * tags:
 *   - name: Positions
 */

/**
 * @swagger
 * /position:
 *   get:
 *     summary: Get all positions
 *     description: Retrieves all the positions available in the system.
 *     tags: [Positions]
 *     responses:
 *       200:
 *         description: List of all positions
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Fetched positions successfully!
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       positionId:
 *                         type: integer
 *                       positionName:
 *                         type: string
 *                       description:
 *                         type: string
 *                       responsibilities:
 *                         type: array
 *                         items:
 *                           type: string
 *                       isActive:
 *                         type: boolean
 *                 error:
 *                   type: string
 *                   nullable: true
 */
positionRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getPositions(req, res, next);
}))

/**
 * @swagger
 * path:
 * /position/create:
 *   post:
 *     summary: Create a new position
 *     description: Creates a new position with name, description, and responsibilities.
 *     tags: [Positions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               positionName:
 *                 type: string
 *                 description: The name of the position
 *                 example: "Software Engineer"
 *               description:
 *                 type: string
 *                 description: A brief description of the position
 *                 example: "Responsible for developing and maintaining software."
 *               responsibilities:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     responsibility:
 *                       type: string
 *                       example: "Develop software solutions"
 *     responses:
 *       201:
 *         description: Position created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Position created successfully!
 *                 data:
 *                   type: object
 *                   properties:
 *                     positionId:
 *                       type: integer
 *                     positionName:
 *                       type: string
 *                 error:
 *                   type: string
 *                   nullable: true
 *       400:
 *         description: Bad request, validation errors
 */
positionRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createPosition(req, res, next);
}))

/**
 * @swagger
 * /position/{positionId}:
 *   patch:
 *     summary: Update an existing position
 *     description: Updates the details of a position by its ID, including position name, description, and responsibilities.
 *     tags: [Positions]
 *     parameters:
 *       - in: path
 *         name: positionId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The position ID to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               positionName:
 *                 type: string
 *                 description: New name for the position
 *               description:
 *                 type: string
 *                 description: New description for the position
 *               responsibilities:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     responsibility:
 *                       type: string
 *               isActive:
 *                 type: boolean
 *                 description: Set the active status of the position
 *     responses:
 *       200:
 *         description: Position updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Position had been updated successfully!
 *                 data:
 *                   type: object
 *                   properties:
 *                     positionId:
 *                       type: integer
 *                     positionName:
 *                       type: string
 *                     description:
 *                       type: string
 *                     isActive:
 *                       type: boolean
 *                     responsibilities:
 *                       type: array
 *                       items:
 *                         type: string
 *                 error:
 *                   type: string
 *                   nullable: true
 *       400:
 *         description: Bad request, missing or invalid position ID
 *       404:
 *         description: Position not found
 */
positionRouter.patch('/:positionId', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updatePosition(req, res, next);
}))

export {
    positionRouter
}