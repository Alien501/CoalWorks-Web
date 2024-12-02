import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createAssetType, getAssetTypeById, updateAssetType, deleteAssetType, getAssetTypes } from "../libs/config/assetType";

const assetTypeRouter = Router();


assetTypeRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createAssetType(req, res, next);
}))

assetTypeRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAssetTypes(req, res, next);
}))

assetTypeRouter.post('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateAssetType(req, res, next);
}))

assetTypeRouter.get('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAssetTypeById(req, res, next);
}))

assetTypeRouter.delete('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteAssetType(req, res, next);
}))

export {
    assetTypeRouter
}