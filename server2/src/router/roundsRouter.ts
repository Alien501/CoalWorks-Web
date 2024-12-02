import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { getRounds } from "../libs/rounds/getRounds";
import { createRounds } from "../libs/rounds/createRounds";

const roundsRouter = Router();

roundsRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getRounds(req, res, next);
}))

roundsRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createRounds(req, res, next);
}))

export {
    roundsRouter
}