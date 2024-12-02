import { Request, RequestHandler, Response } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

const AddAssetScehma = z.object({
    assetName: z.string().min(3, "Asset name should be minimum 3 characters long"),
    assetDescription: z.string().min(3, "Asstet description must be minimum 3 characters long"),
    assetModel: z.string().min(3, "Asset model should be minimum 3 characters long"),
    assetType: z.number(),
    assetLocation: z.number(),
})

const addAsset: RequestHandler = async (req: Request, res: Response) => {
    const validatedData = AddAssetScehma.parse(req.body);

    // const newAsset = await prisma.asset.create({
    //     data: {
    //         assetName: validatedData.assetName,
    //         assetDescription: validatedData.assetDescription,
    //         assetModel: validatedData.assetModel,
    //         assetLocation: validatedData.assetLocation,
    //         assetTypeId: validatedData.assetType
    //     }, select: {
    //         // assetId: true,
    //         assetName: true,
    //         assetDescription: true,
    //         assetModel: true,
    //         assetLocation: true,
    //         assetType: true,
    //     }
    // })

    res.status(201).json({
        message: "Asset has been created successfully!",
        data: [],
        error: null
    })
}

export {
    addAsset
}