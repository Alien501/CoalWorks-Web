import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { checkIsInit } from "../libs/init/checkIsInit";
import { setinitTrue } from "../libs/init/setinitTrue";
import { initDb } from "../libs/init/initDb";

const initRouter = Router();

initRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await checkIsInit(req, res, next);
}));

// initRouter.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
//     await setinitTrue(req, res, next);
// }))

initRouter.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await initDb(req, res)
}))

export {
    initRouter
}