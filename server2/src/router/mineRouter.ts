import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createMine } from "../libs/mine/createMine";
import { getMines } from "../libs/mine/getMines";
import { updateMines } from "../libs/mine/updateMines";
import { getMineById } from "../libs/mine/getMineByid";
import { deleteMine } from "../libs/mine/deleteMine";

const mineRouter = Router();

// Create new mine
/**
 * @swagger
 * /mine:
 *   post:
 *     summary: Create a new mine
 *     description: Adds a new mine with details such as location, type, and production capacity.
 *     tags:
 *       - Mines
 *     requestBody:
 *       description: The details of the mine to be created.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mineName:
 *                 type: string
 *                 description: The name of the mine.
 *                 example: Coal Mine A
 *               location:
 *                 type: object
 *                 properties:
 *                   latitude:
 *                     type: number
 *                     description: Latitude of the mine's location.
 *                     example: 23.12345
 *                   longitude:
 *                     type: number
 *                     description: Longitude of the mine's location.
 *                     example: 79.54321
 *               address:
 *                 type: string
 *                 description: The address of the mine.
 *                 example: 123 Mining Street, City, State
 *               mineType:
 *                 type: string
 *                 description: The type of the mine (e.g., coal, gold).
 *                 example: Coal
 *               productionCapacity:
 *                 type: number
 *                 description: The production capacity of the mine.
 *                 example: 50000
 *               operationalStatus:
 *                 type: boolean
 *                 description: Whether the mine is currently operational.
 *                 example: true
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: The start date of the mine's operations.
 *                 example: 2023-01-01
 *               endDate:
 *                 type: string
 *                 format: date
 *                 description: The end date of the mine's operations, if applicable.
 *                 example: 2030-12-31
 *             required:
 *               - mineName
 *               - location
 *               - address
 *               - mineType
 *               - productionCapacity
 *               - operationalStatus
 *               - startDate
 *     responses:
 *       201:
 *         description: Mine created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Mine created successfully!
 *                 data:
 *                   type: object
 *                   description: The newly created mine's details.
 *                 error:
 *                   type: null
 *                   example: null
 *       400:
 *         description: Invalid input data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid input data"
 *                 error:
 *                   type: string
 *                   example: Validation error
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
 *                   example: "Something went wrong"
 *                 data:
 *                   type: null
 *                   example: null
 */
mineRouter.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createMine(req, res, next);
}))

/**
 * @swagger
 * /mine:
 *   get:
 *     summary: Retrieve a list of all mines
 *     description: Fetches all the mines in the database.
 *     tags:
 *       - Mines
 *     responses:
 *       200:
 *         description: A list of mines successfully retrieved.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Fetched mines successfully!
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       mineId:
 *                         type: integer
 *                         description: The unique ID of the mine.
 *                         example: 1
 *                       mineName:
 *                         type: string
 *                         description: The name of the mine.
 *                         example: Coal Mine A
 *                       locationLatitude:
 *                         type: number
 *                         description: Latitude of the mine's location.
 *                         example: 23.12345
 *                       locationLongitude:
 *                         type: number
 *                         description: Longitude of the mine's location.
 *                         example: 79.54321
 *                       address:
 *                         type: string
 *                         description: The address of the mine.
 *                         example: 123 Mining Street, City, State
 *                       mineType:
 *                         type: string
 *                         description: The type of the mine (e.g., coal, gold).
 *                         example: Coal
 *                       productionCapacity:
 *                         type: number
 *                         description: The production capacity of the mine.
 *                         example: 50000
 *                       operationalStatus:
 *                         type: boolean
 *                         description: Whether the mine is operational.
 *                         example: true
 *                       startDate:
 *                         type: string
 *                         format: date
 *                         description: The start date of the mine's operations.
 *                         example: 2023-01-01
 *                       endDate:
 *                         type: string
 *                         format: date
 *                         description: The end date of the mine's operations, if applicable.
 *                         example: 2030-12-31
 *                 error:
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
 *                   example: "Something went wrong"
 *                 data:
 *                   type: null
 *                   example: null
 */
mineRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getMines(req, res, next);
}))

/**
 * @swagger
 * /mine/{id}:
 *   get:
 *     summary: Retrieve a mine by ID
 *     description: Fetches a specific mine by its unique ID.
 *     tags:
 *       - Mines
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the mine to retrieve.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: The mine with the given ID successfully retrieved.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Mine fetched successfully!
 *                 data:
 *                   type: object
 *                   properties:
 *                     mineId:
 *                       type: integer
 *                       description: The unique ID of the mine.
 *                       example: 1
 *                     mineName:
 *                       type: string
 *                       description: The name of the mine.
 *                       example: Coal Mine A
 *                     locationLatitude:
 *                       type: number
 *                       description: Latitude of the mine's location.
 *                       example: 23.12345
 *                     locationLongitude:
 *                       type: number
 *                       description: Longitude of the mine's location.
 *                       example: 79.54321
 *                     address:
 *                       type: string
 *                       description: The address of the mine.
 *                       example: 123 Mining Street, City, State
 *                     mineType:
 *                       type: string
 *                       description: The type of the mine (e.g., coal, gold).
 *                       example: Coal
 *                     productionCapacity:
 *                       type: number
 *                       description: The production capacity of the mine.
 *                       example: 50000
 *                     operationalStatus:
 *                       type: boolean
 *                       description: Whether the mine is operational.
 *                       example: true
 *                     startDate:
 *                       type: string
 *                       format: date
 *                       description: The start date of the mine's operations.
 *                       example: 2023-01-01
 *                     endDate:
 *                       type: string
 *                       format: date
 *                       description: The end date of the mine's operations, if applicable.
 *                       example: 2030-12-31
 *                     owner:
 *                       type: object
 *                       properties:
 *                         ownerId:
 *                           type: integer
 *                           description: The unique ID of the mine owner.
 *                           example: 1
 *                         ownerName:
 *                           type: string
 *                           description: The name of the mine owner.
 *                           example: John Doe
 *                         contactEmail:
 *                           type: string
 *                           description: The contact email of the owner.
 *                           example: owner@example.com
 *                         contactPhone:
 *                           type: string
 *                           description: The contact phone number of the owner.
 *                           example: 123-456-7890
 *                         contactAddress:
 *                           type: string
 *                           description: The contact address of the owner.
 *                           example: 456 Owner Street, City, State
 *                 error:
 *                   type: null
 *                   example: null
 *       404:
 *         description: The mine with the given ID was not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Mine not found.
 *                 error:
 *                   type: null
 *                   example: null
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
 *                   example: Failed to fetch the mine.
 *                 error:
 *                   type: string
 *                   example: "Internal server error details"
 *                 data:
 *                   type: null
 *                   example: null
 */
mineRouter.get('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getMineById(req, res, next);
}))

/**
 * @swagger
 * /mine:
 *   patch:
 *     summary: Update mine details
 *     description: Updates the details of an existing mine based on the provided mine ID.
 *     tags:
 *       - Mines
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mineId:
 *                 type: integer
 *                 description: The unique ID of the mine to be updated.
 *                 example: 1
 *               mineName:
 *                 type: string
 *                 description: The updated name of the mine.
 *                 example: Coal Mine B
 *               location:
 *                 type: object
 *                 properties:
 *                   latitude:
 *                     type: number
 *                     description: The updated latitude of the mine's location.
 *                     example: 24.23456
 *                   longitude:
 *                     type: number
 *                     description: The updated longitude of the mine's location.
 *                     example: 80.65432
 *               address:
 *                 type: string
 *                 description: The updated address of the mine.
 *                 example: 456 Mining Road, City, State
 *               mineType:
 *                 type: string
 *                 description: The updated type of the mine (e.g., coal, gold).
 *                 example: Gold
 *               productionCapacity:
 *                 type: number
 *                 description: The updated production capacity of the mine.
 *                 example: 60000
 *               operationalStatus:
 *                 type: boolean
 *                 description: The updated operational status of the mine.
 *                 example: false
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: The updated start date of the mine's operations.
 *                 example: 2023-06-01
 *               endDate:
 *                 type: string
 *                 format: date
 *                 description: The updated end date of the mine's operations, if applicable.
 *                 example: 2032-12-31
 *     responses:
 *       200:
 *         description: The mine details were successfully updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Data updated successfully!
 *                 data:
 *                   type: object
 *                   properties:
 *                     mineId:
 *                       type: integer
 *                       description: The unique ID of the mine.
 *                       example: 1
 *                     mineName:
 *                       type: string
 *                       description: The updated name of the mine.
 *                       example: Coal Mine B
 *                     locationLatitude:
 *                       type: number
 *                       description: The updated latitude of the mine's location.
 *                       example: 24.23456
 *                     locationLongitude:
 *                       type: number
 *                       description: The updated longitude of the mine's location.
 *                       example: 80.65432
 *                     address:
 *                       type: string
 *                       description: The updated address of the mine.
 *                       example: 456 Mining Road, City, State
 *                     mineType:
 *                       type: string
 *                       description: The updated type of the mine.
 *                       example: Gold
 *                     productionCapacity:
 *                       type: number
 *                       description: The updated production capacity of the mine.
 *                       example: 60000
 *                     operationalStatus:
 *                       type: boolean
 *                       description: The updated operational status of the mine.
 *                       example: false
 *                     startDate:
 *                       type: string
 *                       format: date
 *                       description: The updated start date of the mine's operations.
 *                       example: 2023-06-01
 *                     endDate:
 *                       type: string
 *                       format: date
 *                       description: The updated end date of the mine's operations, if applicable.
 *                       example: 2032-12-31
 *                 error:
 *                   type: null
 *                   example: null
 *       400:
 *         description: Invalid request data. The provided information may be incomplete or malformed.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Bad request, invalid data.
 *                 error:
 *                   type: string
 *                   example: "Invalid field format."
 *                 data:
 *                   type: null
 *       404:
 *         description: The mine with the given ID was not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Mine not found.
 *                 error:
 *                   type: null
 *                   example: null
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
 *                   example: Failed to update the mine.
 *                 error:
 *                   type: string
 *                   example: "Internal server error details"
 *                 data:
 *                   type: null
 *                   example: null
 */
mineRouter.patch('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateMines(req, res, next);
}))

/**
 * @swagger
 * /mine/{id}:
 *   delete:
 *     summary: Delete a mine by ID
 *     description: Deletes a mine record from the database based on the provided mine ID.
 *     tags:
 *       - Mines
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique ID of the mine to be deleted.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: The mine was successfully deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Mine deleted successfully!
 *                 data:
 *                   type: object
 *                   description: The deleted mine details.
 *                   properties:
 *                     mineId:
 *                       type: integer
 *                       description: The unique ID of the deleted mine.
 *                       example: 1
 *                     mineName:
 *                       type: string
 *                       description: The name of the deleted mine.
 *                       example: Coal Mine A
 *                     locationLatitude:
 *                       type: number
 *                       description: The latitude of the deleted mine's location.
 *                       example: 24.23456
 *                     locationLongitude:
 *                       type: number
 *                       description: The longitude of the deleted mine's location.
 *                       example: 80.65432
 *                     address:
 *                       type: string
 *                       description: The address of the deleted mine.
 *                       example: 123 Mining Road, City, State
 *                     mineType:
 *                       type: string
 *                       description: The type of the deleted mine.
 *                       example: Coal
 *                     productionCapacity:
 *                       type: number
 *                       description: The production capacity of the deleted mine.
 *                       example: 50000
 *                     operationalStatus:
 *                       type: boolean
 *                       description: The operational status of the deleted mine.
 *                       example: true
 *                     startDate:
 *                       type: string
 *                       format: date
 *                       description: The start date of the deleted mine's operations.
 *                       example: 2020-05-01
 *                     endDate:
 *                       type: string
 *                       format: date
 *                       description: The end date of the deleted mine's operations, if applicable.
 *                       example: 2030-12-31
 *                 error:
 *                   type: null
 *                   example: null
 *       400:
 *         description: Invalid mine ID or failed to delete the mine.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Failed to delete the mine.
 *                 error:
 *                   type: string
 *                   example: "Mine not found."
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
 *                   example: Failed to delete the mine.
 *                 error:
 *                   type: string
 *                   example: "Internal server error details"
 *                 data:
 *                   type: null
 *                   example: null
 */

mineRouter.delete('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteMine(req, res, next);
}))

export {
    mineRouter
}