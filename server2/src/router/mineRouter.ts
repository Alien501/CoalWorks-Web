import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createMine } from "../libs/mine/createMine";
import { getMines } from "../libs/mine/getMines";
import { updateMines } from "../libs/mine/updateMines";
import { getMineById } from "../libs/mine/getMineByid";
import { deleteMine } from "../libs/mine/deleteMine";

const mineRouter = Router();

// Create new mine
mineRouter.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createMine(req, res, next);
}))

mineRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getMines(req, res, next);
}))

mineRouter.get('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getMineById(req, res, next);
}))

mineRouter.patch('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateMines(req, res, next);
}))

mineRouter.delete('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteMine(req, res, next);
}))

export {
    mineRouter
}