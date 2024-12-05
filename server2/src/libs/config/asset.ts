import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

// Validation Schema for Asset
const assetSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  assetType: z.number().int("AssetType must be an integer"),
  assetSection: z.number().int("AssetSection must be an integer"),
  latitude: z.number().optional(),
  longitude: z.number().optional()
});

// Create Asset
export const createAsset = async (req: Request, res: Response) => {
  try {
    const data = assetSchema.parse(req.body);
    const asset = await prisma.asset.create({ data });
    res.status(201).json(asset);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      res.status(500).json({ error: "Failed to create asset" });
    }
  }
};

// Get All Assets
export const getAllAssets = async (req: Request, res: Response) => {
  try {
    const assets = await prisma.asset.findMany({
      include: { type: true, section: true, planAssets: true },
    });
    res.status(200).json(assets);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch assets" });
  }
};

// Get Asset by ID
export const getAssetById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const asset = await prisma.asset.findUnique({
      where: { id },
      include: { type: true, section: true, planAssets: true },
    });
    if (!asset) {
      return res.status(404).json({ error: "Asset not found" });
    }
    res.status(200).json(asset);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch asset" });
  }
};

// Update Asset
export const updateAsset = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = assetSchema.parse(req.body);
    const asset = await prisma.asset.update({
      where: { id },
      data,
    });
    res.status(200).json(asset);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    // } else if (error.code === "P2025") {
    //   res.status(404).json({ error: "Asset not found" });
    } else {
      res.status(500).json({ error: "Failed to update asset" });
    }
  }
};

// Delete Asset
export const deleteAsset = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.asset.delete({
      where: { id },
    });
    res.status(200).json({ message: "Asset deleted successfully" });
  } catch (error: any) {
    if (error.code === "P2025") {
      res.status(409).json({ error: "Asset not found" });
    } else {
      res.status(500).json({ error: "Failed to delete asset" });
    }
  }
};
