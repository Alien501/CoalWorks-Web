import { NextFunction, Response, Request, Router } from "express";
import { login } from "../libs/auth/login";
import { asyncHandler } from "../utils/asyncHandler";

const authRouter = Router();

// Auth route
authRouter.post('/login', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await login(req, res, next);
}))

export {
    authRouter
}