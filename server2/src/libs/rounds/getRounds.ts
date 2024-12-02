import { Request, RequestHandler, Response } from "express";
import { prisma } from "../../utils/prisma";

const getRounds: RequestHandler = async (req: Request, res: Response) => {
    const roundsData = await prisma.plan.findMany();

    res.status(200).json({
        message: "Fetched rounds successfully",
        data: roundsData,
        error: null
    })
}

export {
    getRounds
}