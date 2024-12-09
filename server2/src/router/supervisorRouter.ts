import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createSupervisors, getAllSupervisors, getSupervisorById, deleteSupervisor, updateSupervisor } from "../libs/supervisor/supervisor";

const supervisorRouter = Router();
/**
 * @swagger
 * tags:
 *   - name: Supervisor
 */

/**
 * @swagger
 * /supervisor:
 *   get:
 *     summary: Fetch all supervisors with their user and section details
 *     tags: [Supervisors]
 *     responses:
 *       200:
 *         description: List of all supervisors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       user:
 *                         type: object
 *                         properties:
 *                           username:
 *                             type: string
 *                           email:
 *                             type: string
 *                       section:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *       500:
 *         description: Internal server error
 */
supervisorRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllSupervisors(req, res, next);
}))

/**
 * @swagger
 * /supervisor/create:
 *   post:
 *     summary: Create new supervisors for a given section
 *     tags: [Supervisors]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: array
 *                 items:
 *                   type: integer
 *               sectionId:
 *                 type: integer
 *             required:
 *               - userId
 *               - sectionId
 *     responses:
 *       201:
 *         description: Successfully created new supervisors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       userId:
 *                         type: integer
 *                       sectionId:
 *                         type: integer
 *       400:
 *         description: Validation error in the request body
 *       500:
 *         description: Internal server error
 */
supervisorRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createSupervisors(req, res, next);
}))


/**
 * @swagger
 * /supervisor/{id}:
 *   post:
 *     summary: Fetch supervisor details by ID
 *     tags: [Supervisors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique ID of the supervisor
 *     responses:
 *       200:
 *         description: Supervisor details for the given ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                         username:
 *                           type: string
 *                         email:
 *                           type: string
 *                     section:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *       404:
 *         description: Supervisor not found
 *       500:
 *         description: Internal server error
 */
supervisorRouter.post('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getSupervisorById(req, res, next);
}))

/**
 * @swagger
 * /supervisor/{id}:
 *   delete:
 *     summary: Delete a supervisor by ID
 *     tags: [Supervisors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique ID of the supervisor
 *     responses:
 *       200:
 *         description: Successfully deleted the supervisor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error
 */
supervisorRouter.delete('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteSupervisor(req, res, next);
}))

/**
 * @swagger
 * /supervisor/{id}:
 *   put:
 *     summary: Update supervisor details by ID
 *     tags: [Supervisors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique ID of the supervisor
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sectionId:
 *                 type: integer
 *             required:
 *               - sectionId
 *     responses:
 *       200:
 *         description: Successfully updated supervisor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: integer
 *                     sectionId:
 *                       type: integer
 *       400:
 *         description: Validation error in the request body
 *       404:
 *         description: Supervisor not found
 *       500:
 *         description: Internal server error
 */
supervisorRouter.put('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateSupervisor(req, res, next);
}))


export {
    supervisorRouter
}