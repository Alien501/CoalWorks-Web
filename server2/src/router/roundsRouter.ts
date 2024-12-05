import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { getRounds } from "../libs/rounds/getRounds";
import { createRounds } from "../libs/rounds/createRounds";
import { createOrUpdateActivePlans, deleteActivePlansForPlan, getActivePlansByPlanId } from "../libs/rounds/assignRounds";

const roundsRouter = Router();

roundsRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getRounds(req, res, next);
}))

roundsRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createRounds(req, res, next);
}))


roundsRouter.post('/active-plan', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createOrUpdateActivePlans(req, res);
}))


roundsRouter.get('/active-plans/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getActivePlansByPlanId(req, res);
}))

roundsRouter.delete('/active-plan', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteActivePlansForPlan(req, res);
}))


export {
    roundsRouter
}