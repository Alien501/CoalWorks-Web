import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

// Validation Schema for AssetType
const assetTypeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
});

// Create AssetType
export const createAssetType = async (req: Request, res: Response) => {
  try {
    const data = assetTypeSchema.parse(req.body);
    const assetType = await prisma.assetType.create({ data });
    res.status(201).json(assetType);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      res.status(500).json({ error: "Failed to create asset type" });
    }
  }
};

// Get All AssetTypes
export const getAllAssetTypes = async (req: Request, res: Response) => {
  try {
    const assetTypes = await prisma.assetType.findMany({
      include: { assets: true },
    });
    res.status(200).json(assetTypes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch asset types" });
  }
};

// Get AssetType by ID
export const getAssetTypeById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const assetType = await prisma.assetType.findUnique({
      where: { id },
      include: { assets: true },
    });
    if (!assetType) {
      return res.status(404).json({ error: "Asset type not found" });
    }
    res.status(200).json(assetType);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch asset type" });
  }
};

// Update AssetType
export const updateAssetType = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = assetTypeSchema.parse(req.body);
    const assetType = await prisma.assetType.update({
      where: { id },
      data,
    });
    res.status(200).json(assetType);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    // } else if (error.code === "P2025") {
    //   res.status(404).json({ error: "Asset type not found" });
    } else {
      res.status(500).json({ error: "Failed to update asset type" });
    }
  }
};

// Delete AssetType
export const deleteAssetType = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.assetType.delete({
      where: { id },
    });
    res.status(200).json({ message: "Asset type deleted successfully" });
  } catch (error) {
    // if (error.code === "P2025") {
    //   res.status(404).json({ error: "Asset type not found" });
    // } else {
      res.status(500).json({ error: "Failed to delete asset type" });
    // }
  }
};
