import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { getShifts, getUserDetailsByShiftAndSection, getShiftDetails } from "../libs/shifts/getShifts";
import { getShiftAssignmentsBySectionAndShift } from "../libs/shifts/createShifts";
import { createShifts, assignShiftsToSection } from "../libs/shifts/createShifts";
import { updateShift } from "../libs/shifts/upadteShift";

const shiftRouter = Router()
shiftRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getShifts(req, res, next);
}))

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