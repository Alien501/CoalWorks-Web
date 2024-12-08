import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createSection, deleteSection, getAllSections, getSectionById, updateSection, getSupervisorBySectionId, getAllUsersOfSection } from "../libs/config/section2";


const sectionRouter = Router();

sectionRouter.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createSection(req, res);
}))

sectionRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllSections(req, res);
}))

sectionRouter.get('/users', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllUsersOfSection(req, res);
}))

sectionRouter.get('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getSectionById(req, res);
}))

sectionRouter.get('/:id/supervisors', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getSupervisorBySectionId(req, res);
}))

sectionRouter.get('/:id/users', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllUsersOfSection(req, res);
}))

sectionRouter.post('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateSection(req, res);
}))

sectionRouter.delete('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteSection(req, res);
}))


export {
    sectionRouter
}