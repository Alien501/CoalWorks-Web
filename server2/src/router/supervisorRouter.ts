import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createSupervisor, getAllSupervisors, getSupervisorById, deleteSupervisor, updateSupervisor } from "../libs/supervisor/supervisor";

const supervisorRouter = Router();

supervisorRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createSupervisor(req, res, next);
}))

supervisorRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllSupervisors(req, res, next);
}))


supervisorRouter.post('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getSupervisorById(req, res, next);
}))


supervisorRouter.get('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteSupervisor(req, res, next);
}))

supervisorRouter.delete('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateSupervisor(req, res, next);
}))


export {
    supervisorRouter
}