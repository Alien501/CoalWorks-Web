import { Request, Response, NextFunction, RequestHandler } from "express";
import { prisma } from "../../utils/prisma";
import z from "zod";

const AssetTypeSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  description: z.string().min(1, "Description is required").max(255),
});

const AssetTypeUpdateSchema = AssetTypeSchema.partial();

const createAssetType: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const validatedData = AssetTypeSchema.parse(req.body);
    const assetType = await prisma.assetType.create({
      data: validatedData,
    });
    res.status(201).json(assetType);
  } catch (error: any) {
    next(error);
  }
};

const getAssetTypes: RequestHandler = async (_req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const assetTypes = await prisma.assetType.findMany({
      include: { assets: true },
    });
    res.status(200).json(assetTypes);
  } catch (error: any) {
    next(error);
  }
};

const getAssetTypeById: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  try {
    const assetType = await prisma.assetType.findUnique({
      where: { id },
      include: { assets: true },
    });

    if (!assetType) return res.status(404).json({ error: "AssetType not found" });
    res.status(200).json(assetType);
  } catch (error: any) {
    next(error);
  }
};

const updateAssetType: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  try {
    const validatedData = AssetTypeUpdateSchema.parse(req.body);

    const assetType = await prisma.assetType.update({
      where: { id },
      data: validatedData,
    });

    res.status(200).json(assetType);
  } catch (error: any) {
    next(error);
  }
};

const deleteAssetType: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  try {
    await prisma.assetType.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error: any) {
    next(error);
  }
};

export {
    getAssetTypeById,
    getAssetTypes,
    createAssetType,
    updateAssetType,
    deleteAssetType
}
