import { Router, Request, Response, NextFunction } from "express";
import { getSections, newSection } from "../libs/config/section";
import { asyncHandler } from "../utils/asyncHandler";

const sectionRouter = Router();

sectionRouter.get('/:scaleLevel', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getSections(req, res, next);
}))

sectionRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await newSection(req, res, next);
}))

export {
    sectionRouter
}