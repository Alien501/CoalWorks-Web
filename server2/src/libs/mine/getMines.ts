import { Request, RequestHandler, Response } from "express";
import { prisma } from "../../utils/prisma";

const getMines: RequestHandler = async (req: Request, res: Response) => {
    const minesData = await prisma.mine.findMany();

    res.status(200).json({
        message: "Fetched mines successfully!",
        data: minesData,
        error: null
    })
}

export {
    getMines
}