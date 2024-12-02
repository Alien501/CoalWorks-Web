import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { addAsset } from "../libs/asset/addAsset";
import { getAssets } from "../libs/asset/getAssets";

const assetRouter = Router();

assetRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAssets(req, res, next);
}))

assetRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await addAsset(req, res, next);
}))

export {
    assetRouter
}