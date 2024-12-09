import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { checkIsInit } from "../libs/init/checkIsInit";
import { setinitTrue } from "../libs/init/setinitTrue";
import { initDb } from "../libs/init/initDb";

const initRouter = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Check initialization status
 *     description: Returns whether the application has been initialized.
 *     tags:
 *       - Initialization
 *     responses:
 *       200:
 *         description: Returns the initialization status of the application.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Application had been initialised already!"
 *                 data:
 *                   type: boolean
 *                   example: true
 *                 error:
 *                   type: null
 *                   example: null
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 *                 data:
 *                   type: null
 *                   example: null
 *                 error:
 *                   type: string
 *                   example: "An unexpected error occurred"
 */
initRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await checkIsInit(req, res, next);
}));

/**
 * @swagger
 * /:
 *   post:
 *     summary: Initialize the database
 *     description: Sets up the database with initial data, including admin, owner, and mine details.
 *     tags:
 *       - Initialization
 *     requestBody:
 *       description: Initial configuration details for setting up the database.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               adminConfig:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "Admin User"
 *                   email:
 *                     type: string
 *                     example: "admin@example.com"
 *                   password:
 *                     type: string
 *                     example: "Password123!"
 *               ownerDetails:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "Owner Name"
 *                   email:
 *                     type: string
 *                     example: "owner@example.com"
 *                   phoneNumber:
 *                     type: string
 *                     example: "+1234567890"
 *                   address:
 *                     type: string
 *                     example: "123 Main Street, City, Country"
 *               mineDetails:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     mineName:
 *                       type: string
 *                       example: "Coal Mine Alpha"
 *                     location:
 *                       type: object
 *                       properties:
 *                         latitude:
 *                           type: number
 *                           example: 12.971598
 *                         longitude:
 *                           type: number
 *                           example: 77.594566
 *                     address:
 *                       type: string
 *                       example: "Mine Address"
 *                     mineType:
 *                       type: string
 *                       example: "Coal"
 *                     productionCapacity:
 *                       type: number
 *                       example: 5000
 *                     startDate:
 *                       type: string
 *                       example: "2023-01-01"
 *                     endDate:
 *                       type: string
 *                       example: "2024-12-31"
 *                     isActive:
 *                       type: boolean
 *                       example: true
 *     responses:
 *       200:
 *         description: Database initialized successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Database initialised successfully!"
 *                 error:
 *                   type: null
 *                   example: null
 *                 data:
 *                   type: object
 *                   properties:
 *                     owner:
 *                       type: object
 *                       description: Details of the owner created.
 *                     mines:
 *                       type: array
 *                       description: List of mines created.
 *       400:
 *         description: Database already initialized.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Database already initialised"
 *                 error:
 *                   type: string
 *                   example: "Bad request"
 *                 data:
 *                   type: null
 *                   example: null
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 *                 error:
 *                   type: string
 *                   example: "An unexpected error occurred"
 *                 data:
 *                   type: null
 *                   example: null
 */
initRouter.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await initDb(req, res)
}))

export {
    initRouter
}
// initRouter.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
//     await setinitTrue(req, res, next);
// }))