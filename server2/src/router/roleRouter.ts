import { Router, Response, Request, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createRole } from "../libs/role/createRole";

const roleRouter = Router();

roleRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createRole(req, res, next);
}))

export {
    roleRouter
}