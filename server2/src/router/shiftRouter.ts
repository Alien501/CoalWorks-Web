import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { getShifts, getUserDetailsByShiftAndSection, getShiftDetails } from "../libs/shifts/getShifts";
import { getShiftAssignmentsBySectionAndShift } from "../libs/shifts/createShifts";
import { createShifts, assignShiftsToSection } from "../libs/shifts/createShifts";
import { updateShift } from "../libs/shifts/upadteShift";

const shiftRouter = Router()

/**
 * @swagger
 * /shift:
 *   get:
 *     summary: Get all shifts
 *     description: Fetches a list of all active shifts
 *     responses:
 *       200:
 *         description: A list of shifts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Fetched shifts successfully!
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       shiftId:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: Morning Shift
 *                       startTime:
 *                         type: string
 *                         format: date-time
 *                         example: 2024-12-09T08:00:00Z
 *                       endTime:
 *                         type: string
 *                         format: date-time
 *                         example: 2024-12-09T16:00:00Z
 *                       isActive:
 *                         type: boolean
 *                         example: true
 *       500:
 *         description: Internal server error
 */
shiftRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getShifts(req, res, next);
}))

/**
 * @swagger
 * /shift/user:
 *   get:
 *     summary: Get users by shift and section
 *     description: Fetches a list of users assigned to a specific shift and section
 *     parameters:
 *       - in: query
 *         name: shiftId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: sectionId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *     responses:
 *       200:
 *         description: A list of users for the given shift and section
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
 *                         example: 101
 *                       username:
 *                         type: string
 *                         example: johndoe
 *                       email:
 *                         type: string
 *                         example: johndoe@example.com
 *                       phone:
 *                         type: string
 *                         example: +1234567890
 *                       isSupervisor:
 *                         type: boolean
 *                         example: false
 *       400:
 *         description: Missing shiftId or sectionId
 *       404:
 *         description: No users found for the given shift and section
 *       500:
 *         description: Internal server error
 */
shiftRouter.get('/user', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getUserDetailsByShiftAndSection(req, res, next);
}))


shiftRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createShifts(req, res, next);
}))

shiftRouter.patch('/:shiftId', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateShift(req, res, next);
}))

shiftRouter.post('/assign-shifts', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await assignShiftsToSection(req, res);
}))

shiftRouter.post('/:sectionId/shifts/:shiftId/assignments', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getShiftAssignmentsBySectionAndShift(req, res);
}))


export {
    shiftRouter
}