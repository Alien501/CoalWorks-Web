import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createSectionType, getSectionTypeById, getSectionTypes, updateSectionType, deleteSectionType } from "../libs/config/sectionType";

const sectionTypeRouter = Router();

sectionTypeRouter.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createSectionType(req, res, next);
}))

sectionTypeRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getSectionTypes(req, res, next);
}))

sectionTypeRouter.get('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getSectionTypeById(req, res, next);
}))

sectionTypeRouter.post('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateSectionType(req, res, next);
}))

sectionTypeRouter.delete('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteSectionType(req, res, next);
}))

export {
    sectionTypeRouter
}