import { Router, Request, Response, NextFunction} from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createAsset, deleteAsset, getAssetById, updateAsset, getAllAssets } from "../libs/config/asset";

const assetRouter = Router();

/**
 * @swagger
 * tags:
 *   - name: Asset Management
 */

/**
 * @swagger
 * /asset:
 *   post:
 *     summary: Create a new asset
 *     tags: [Asset Management]
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
 *               assetType:
 *                 type: integer
 *               assetSection:
 *                 type: integer
 *               latitude:
 *                 type: number
 *                 format: float
 *               longitude:
 *                 type: number
 *                 format: float
 *     responses:
 *       201:
 *         description: Asset created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 assetType:
 *                   type: integer
 *                 assetSection:
 *                   type: integer
 *       400:
 *         description: Bad request due to invalid input
 *       500:
 *         description: Internal server error
 */
assetRouter.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createAsset(req, res);
}))

/**
 * @swagger
 * /asset:
 *   get:
 *     summary: Get all assets
 *     tags: [Asset Management]
 *     responses:
 *       200:
 *         description: List of all assets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   assetType:
 *                     type: integer
 *                   assetSection:
 *                     type: integer
 *       500:
 *         description: Internal server error
 */
assetRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllAssets(req, res)
}))

/**
 * @swagger
 * /asset/{id}:
 *   get:
 *     summary: Get a single asset by ID
 *     tags: [Asset Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the asset
 *     responses:
 *       200:
 *         description: Asset found successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 assetType:
 *                   type: integer
 *                 assetSection:
 *                   type: integer
 *       404:
 *         description: Asset not found
 *       500:
 *         description: Internal server error
 */
assetRouter.get('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAssetById(req, res)
}))

/**
 * @swagger
 * /asset/{id}:
 *   post:
 *     summary: Update an existing asset
 *     tags: [Asset Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the asset to update
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
 *               assetType:
 *                 type: integer
 *               assetSection:
 *                 type: integer
 *               latitude:
 *                 type: number
 *                 format: float
 *               longitude:
 *                 type: number
 *                 format: float
 *     responses:
 *       200:
 *         description: Asset updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 assetType:
 *                   type: integer
 *                 assetSection:
 *                   type: integer
 *       400:
 *         description: Bad request due to invalid input
 *       404:
 *         description: Asset not found
 *       500:
 *         description: Internal server error
 */
assetRouter.post('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateAsset(req, res);
}))

/**
 * @swagger
 * /asset/{id}:
 *   delete:
 *     summary: Delete an asset by ID
 *     tags: [Asset Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the asset to delete
 *     responses:
 *       200:
 *         description: Asset deleted successfully
 *       404:
 *         description: Asset not found
 *       500:
 *         description: Internal server error
 */
assetRouter.delete('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteAsset(req, res);
}))

export {
    assetRouter
}