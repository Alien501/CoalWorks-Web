import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createSection, getSectionById, getSections, updateSection, deleteSection } from "../libs/config/section";

const sectionRouter = Router();

sectionRouter.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createSection(req, res, next);
}))

sectionRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getSections(req, res, next);
}))

sectionRouter.get('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getSectionById(req, res, next);
}))

sectionRouter.post('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateSection(req, res, next);
}))

sectionRouter.delete('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteSection(req, res, next);
}))

export {
    sectionRouter
}