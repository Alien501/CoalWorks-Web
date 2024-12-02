import { Request, RequestHandler, Response } from "express";
import { prisma } from "../../utils/prisma";

const getAssets: RequestHandler = async (req: Request, res: Response) => {
    const assetsData = await prisma.asset.findMany()

    res.status(200).json({
        message: "Fetched assets successfully!",
        data: assetsData,
        error: null
    })
}

export {
    getAssets
}