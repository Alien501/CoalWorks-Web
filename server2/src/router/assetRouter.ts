import { Router, Request, Response, NextFunction} from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createAsset, deleteAsset, getAssetById, updateAsset, getAllAssets } from "../libs/config/asset";

const assetRouter = Router();

assetRouter.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createAsset(req, res);
}))

assetRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllAssets(req, res)
}))

assetRouter.get('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAssetById(req, res)
}))

assetRouter.post('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateAsset(req, res);
}))

assetRouter.delete('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteAsset(req, res);
}))

export {
    assetRouter
}