import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { getRounds } from "../libs/rounds/getRounds";
import { createRounds } from "../libs/rounds/createRounds";
import { createOrUpdateActivePlans, deleteActivePlansForPlan, getActivePlansByPlanId } from "../libs/rounds/assignRounds";

const roundsRouter = Router();
/**
 * @swagger
 * tags:
 *   - name: Rounds
 */

/**
 * @swagger
 * /rounds:
 *   get:
 *     summary: Get all rounds
 *     tags: [Rounds]
 *     responses:
 *       200:
 *         description: Successfully fetched rounds
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Fetched rounds successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     description: Round data
 *                 error:
 *                   type: string
 *                   example: null
 *       500:
 *         description: Failed to fetch rounds
 */
roundsRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getRounds(req, res, next);
}))

/**
 * @swagger
 * /rounds/create:
 *   post:
 *     summary: Create a new round with plan details, form, files, and assets
 *     tags: [Rounds]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               planName:
 *                 type: string
 *                 description: The name of the plan
 *               planDescription:
 *                 type: string
 *                 description: The description of the plan
 *               form:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: Unique ID for the form section
 *                     sectionId:
 *                       type: integer
 *                       description: Section ID
 *                     name:
 *                       type: string
 *                       description: Name of the section
 *                     responseType:
 *                       type: string
 *                       description: Type of response (e.g., text, number, etc.)
 *                     type:
 *                       type: string
 *                       description: Type of the section (e.g., task, input)
 *               notes:
 *                 type: string
 *                 description: Additional notes for the plan (optional)
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                   description: File to be uploaded (multiple files allowed)
 *               assets:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     assetId:
 *                       type: integer
 *                       description: Asset ID
 *                     assetName:
 *                       type: string
 *                       description: Asset name
 *     responses:
 *       201:
 *         description: Successfully created the round and plan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Plan created successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     createPlan:
 *                       type: object
 *                       description: Created plan data
 *                     fileRecords:
 *                       type: array
 *                       items:
 *                         type: object
 *                         description: File records associated with the plan
 *                 error:
 *                   type: string
 *                   example: null
 *       400:
 *         description: Validation error in the request body
 *       500:
 *         description: Internal server error
 */
roundsRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createRounds(req, res, next);
}))

/**
 * @swagger
 * /rounds/active-plan:
 *   post:
 *     summary: Create or update active plans for a specific plan ID and section IDs
 *     tags: [Rounds]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               planName:
 *                 type: string
 *                 description: Name of the plan
 *               planId:
 *                 type: integer
 *                 description: Unique identifier for the plan
 *               sectionIds:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 description: Array of section IDs associated with the plan
 *                 minItems: 1
 *     responses:
 *       201:
 *         description: Successfully created or updated active plans
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   planName:
 *                     type: string
 *                   planId:
 *                     type: integer
 *                   sectionId:
 *                     type: integer
 *       400:
 *         description: Validation error in the request body
 *       500:
 *         description: Internal server error
 */
roundsRouter.post('/active-plan', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createOrUpdateActivePlans(req, res);
}))

/**
 * @swagger
 * /rounds/active-plans/{id}:
 *   get:
 *     summary: Get active plans by plan ID
 *     tags: [Rounds]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Unique identifier for the plan
 *     responses:
 *       200:
 *         description: Successfully fetched active plans for the given plan ID
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   planName:
 *                     type: string
 *                   planId:
 *                     type: integer
 *                   sectionId:
 *                     type: integer
 *                   section:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       type:
 *                         type: string
 *                   plan:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *       404:
 *         description: No active plans found for the given plan ID
 *       500:
 *         description: Internal server error
 */
roundsRouter.get('/active-plans/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getActivePlansByPlanId(req, res);
}))

/**
 * @swagger
 * /rounds/active-plan:
 *   delete:
 *     summary: Delete active plans for a specific plan ID
 *     tags: [Rounds]
 *     parameters:
 *       - in: query
 *         name: planId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Unique identifier for the plan whose active plans need to be deleted
 *     responses:
 *       200:
 *         description: Successfully deleted active plans
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 count:
 *                   type: integer
 *       500:
 *         description: Internal server error
 */
roundsRouter.delete('/active-plan', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteActivePlansForPlan(req, res);
}))


export {
    roundsRouter
}