import { Router, Request, Response, NextFunction} from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createAsset, deleteAsset, getAssetById, updateAsset, getAssets } from "../libs/config/asset";

const assetRouter = Router();

assetRouter.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createAsset(req, res, next);
}))

assetRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        hi: "hio"
    })
}))

assetRouter.post('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateAsset(req, res, next);
}))

assetRouter.delete('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteAsset(req, res, next);
}))

export {
    assetRouter
}