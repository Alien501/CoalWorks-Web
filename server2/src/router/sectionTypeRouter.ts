import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createSectionType, getSectionTypeById, updateSectionType, deleteSectionType, getAllSectionTypes } from "../libs/config/sectionType";

const sectionTypeRouter = Router();

sectionTypeRouter.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createSectionType(req, res);
}))

sectionTypeRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllSectionTypes(req, res);
}))

sectionTypeRouter.get('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getSectionTypeById(req, res);
}))

sectionTypeRouter.put('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateSectionType(req, res);
}))

sectionTypeRouter.delete('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteSectionType(req, res);
}))

export {
    sectionTypeRouter
}