import { Router, Response, Request, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createRole } from "../libs/role/createRole";
import { getAllRoles, getAllRolesById } from "../libs/role/getAllRoles";
import { deleteRole } from "../libs/role/deleteRole";
import { updateRole } from "../libs/role/updateRole";

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

roleRouter.delete('/:roleId', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteRole(req, res, next);
}))

roleRouter.post('/:roleId', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateRole(req, res, next);
}))


export {
    roleRouter
}