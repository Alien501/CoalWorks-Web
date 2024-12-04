import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { adminLogin } from "../libs/admin/login";
import { adminVerifyToken } from "../utils/passwordUtils";

const adminRouter = Router();

adminRouter.post('/login', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await adminLogin(req, res);
}))


adminRouter.get('/verify', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await adminVerifyToken(req, res, next);
}))

export {
    adminRouter
}