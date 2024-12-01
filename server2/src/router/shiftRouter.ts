import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { getShifts } from "../libs/shifts/getShifts";
import { createShifts } from "../libs/shifts/createShifts";
import { updateShift } from "../libs/shifts/upadteShift";

const shiftRouter = Router()
shiftRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getShifts(req, res, next);
}))

shiftRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createShifts(req, res, next);
}))

shiftRouter.patch('/:shiftId', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateShift(req, res, next);
}))

export {
    shiftRouter
}