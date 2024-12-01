import { Request, RequestHandler, Response } from "express";
import { prisma } from "../../utils/prisma";

const getPositions: RequestHandler = async (req: Request, res: Response) => {
    const positionData = await prisma.position.findMany({
        select: {
            isActive: true,
            description: true,
            positionId: true,
            positionName: true,
            responsibilities: true
        }
    })

    res.status(200).send({
        message: "Fetched positions successfully!",
        data: positionData,
        error: null
    })
}

export {
    getPositions
}