import { Router, Request, Response, NextFunction } from "express";
import { getSections, newSection, getAllLargeSections, getAllMediumSections, getAllMicroSections, getAllSectionTypes, getAllSections,getAllSmallSections, getAllUnitSections } from "../libs/config/section";
import { asyncHandler } from "../utils/asyncHandler";

const sectionRouter = Router();

sectionRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await newSection(req, res, next);
}))

sectionRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllSections(req, res, next);
}))

// sectionRouter.get('/:scaleLevel', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
//     await getSections(req, res, next);
// }))

sectionRouter.get('/items', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllSectionTypes(req, res, next);
}))

sectionRouter.get('/large', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllLargeSections(req, res, next);
}))

sectionRouter.get('/medium', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllMediumSections(req, res, next);
}))

sectionRouter.get('/small', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllSmallSections(req, res, next);
}))

sectionRouter.get('/unit', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllUnitSections(req, res, next);
}))

sectionRouter.get('/micro', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllMicroSections(req, res, next);
}))

sectionRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await newSection(req, res, next);
}))

export {
    sectionRouter
}