import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createUser, assignUserToSection } from "../libs/user/createUser";
import { getAllUsers } from "../libs/user/getUser";

const userRouter = Router();

userRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createUser(req, res, next);
}))

userRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllUsers(req, res, next);
}))

userRouter.post('/assign-section', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await assignUserToSection(req, res, next);
}))

export {
    userRouter
}