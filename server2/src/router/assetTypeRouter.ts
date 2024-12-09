import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createAssetType, getAssetTypeById, updateAssetType, deleteAssetType, getAllAssetTypes } from "../libs/config/assetType";

const assetTypeRouter = Router();

/**
 * @swagger
 * tags:
 *   - name: AssetTypes
 */

/**
 * @swagger
 * /assettype:
 *   post:
 *     summary: Create a new asset type
 *     tags: [AssetTypes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the asset type
 *               description:
 *                 type: string
 *                 description: Description of the asset type
 *     responses:
 *       201:
 *         description: Asset type created successfully
 *       400:
 *         description: Validation errors
 *       500:
 *         description: Failed to create asset type
 */
assetTypeRouter.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createAssetType(req, res);
}))

/**
 * @swagger
 * /assettype:
 *   get:
 *     summary: Get all asset types
 *     tags: [AssetTypes]
 *     responses:
 *       200:
 *         description: List of asset types
 *       500:
 *         description: Failed to fetch asset types
 */
assetTypeRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllAssetTypes(req, res);
}))

/**
 * @swagger
 * /assettype/{id}:
 *   post:
 *     summary: Update an asset type by ID
 *     tags: [AssetTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the asset type to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Asset type updated successfully
 *       400:
 *         description: Validation errors
 *       404:
 *         description: Asset type not found
 *       500:
 *         description: Failed to update asset type
 */
assetTypeRouter.post('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateAssetType(req, res)
}))

/**
 * @swagger
 * /assettype/{id}:
 *   get:
 *     summary: Get a specific asset type by ID
 *     tags: [AssetTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the asset type
 *     responses:
 *       200:
 *         description: Asset type found
 *       404:
 *         description: Asset type not found
 *       500:
 *         description: Failed to fetch asset type
 */
assetTypeRouter.get('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAssetTypeById(req, res);
}))

/**
 * @swagger
 * /assettype/{id}:
 *   delete:
 *     summary: Delete an asset type by ID
 *     tags: [AssetTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the asset type to delete
 *     responses:
 *       200:
 *         description: Asset type deleted successfully
 *       409:
 *         description: Asset type cannot be deleted due to foreign key constraint
 *       500:
 *         description: Failed to delete asset type
 */
assetTypeRouter.delete('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteAssetType(req, res);
}))

export {
    assetTypeRouter
}