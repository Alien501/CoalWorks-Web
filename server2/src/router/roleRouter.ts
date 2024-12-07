import { Router, Response, Request, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createRole } from "../libs/role/createRole";
import { getAllRoles, getAllRolesById } from "../libs/role/getAllRoles";

const roleRouter = Router();

roleRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createRole(req, res, next);
}))

roleRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllRoles(req, res, next);
}))

roleRouter.get('/:roleId', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllRolesById(req, res, next);
}))


export {
    roleRouter
}