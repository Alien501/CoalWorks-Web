import { Request, RequestHandler, Response } from "express";
import { prisma } from "../../utils/prisma";

const getSections: RequestHandler = async (req: Request, res: Response) => {
    const data = await prisma.section.findMany();

    res.status(200).json({
        message: "Fetched data successfully",
        data: data,
        error: null
    })
}

export {
    getSections
}