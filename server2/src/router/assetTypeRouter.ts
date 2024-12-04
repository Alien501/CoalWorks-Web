import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createAssetType, getAssetTypeById, updateAssetType, deleteAssetType, getAllAssetTypes } from "../libs/config/assetType";

const assetTypeRouter = Router();


assetTypeRouter.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createAssetType(req, res);
}))

assetTypeRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllAssetTypes(req, res);
}))

assetTypeRouter.post('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateAssetType(req, res)
}))

assetTypeRouter.get('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAssetTypeById(req, res);
}))

assetTypeRouter.delete('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteAssetType(req, res);
}))

export {
    assetTypeRouter
}