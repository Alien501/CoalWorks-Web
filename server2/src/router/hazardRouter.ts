import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { addExposedGroup, addhazardActivity, addHazardHazard, addhazardMechanism, getExposedGroup, getHazardActivity, getHazardHazard, getHazardMechanism } from "../libs/hazard/hazard";

const hazardRouter = Router()

hazardRouter.post('/activity', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await addhazardActivity(req, res);
}))

hazardRouter.get('/activity', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getHazardActivity(req, res);
}))

hazardRouter.post('/hazard', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await addHazardHazard(req, res);
}))

hazardRouter.get('/hazard', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getHazardHazard(req, res);
}))

hazardRouter.post('/mechanism', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await addhazardMechanism(req, res);
}))

hazardRouter.get('/mechanism', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getHazardMechanism(req, res);
}))

hazardRouter.post('/exposed-group', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await addExposedGroup(req, res);
}))

hazardRouter.get('/exposed-group', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getExposedGroup(req, res);
}))

export {
    hazardRouter
}