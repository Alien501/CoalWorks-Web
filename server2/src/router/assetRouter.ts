import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { addAsset } from "../libs/asset/addAsset";

const assetRouter = Router();

assetRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        hi: "hio"
    })
}))

assetRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await addAsset(req, res, next);
}))

export {
    assetRouter
}