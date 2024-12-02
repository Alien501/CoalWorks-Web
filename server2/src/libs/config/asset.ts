import { Request, Response, NextFunction, RequestHandler } from "express";
import { prisma } from "../../utils/prisma";
import z from "zod";


const AssetSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  description: z.string().min(1, "Description is required").max(255),
  assetType: z.number().int().positive("AssetType must be a positive integer"),
  assetSection: z.number().int().positive("AssetSection must be a positive integer"),
});

const AssetUpdateSchema = AssetSchema.partial();

// Create Asset
const createAsset: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const validatedData = AssetSchema.parse(req.body);
    const asset = await prisma.asset.create({
      data: validatedData,
    });
    res.status(201).json(asset);
  } catch (error: any) {
    next(error);
  }
};

// Get all Assets
const getAssets: RequestHandler = async (_req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const assets = await prisma.asset.findMany({
      include: { type: true, section: true },
    });
    res.status(200).json(assets);
  } catch (error: any) {
    next(error);
  }
};


const getAssetById: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  try {
    const asset = await prisma.asset.findUnique({
      where: { id },
      include: { type: true, section: true },
    });

    if (!asset) return res.status(404).json({ error: "Asset not found" });
    res.status(200).json(asset);
  } catch (error: any) {
    next(error);
  }
};

// Update Asset
const updateAsset: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  try {
    const validatedData = AssetUpdateSchema.parse(req.body);

    const asset = await prisma.asset.update({
      where: { id },
      data: validatedData,
    });

    res.status(200).json(asset);
  } catch (error: any) {
    next(error);
  }
};

// Delete Asset
const deleteAsset: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  try {
    await prisma.asset.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error: any) {
    next(error);
  }
};

export {
    getAssetById,
    getAssets,
    updateAsset,
    deleteAsset,
    createAsset
}
