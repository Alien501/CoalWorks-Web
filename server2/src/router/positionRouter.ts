import { Router, Response, Request, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { getPositions } from "../libs/position/getPositions";
import { createPosition } from "../libs/position/createPosition";
import { updatePosition } from "../libs/position/updatePosition";

const positionRouter  = Router();

positionRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getPositions(req, res, next);
}))

positionRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createPosition(req, res, next);
}))

positionRouter.patch('/:positionId', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updatePosition(req, res, next);
}))

export {
    positionRouter
}