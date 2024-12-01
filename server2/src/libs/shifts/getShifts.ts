import { Request, RequestHandler, Response } from "express";
import { prisma } from "../../utils/prisma";

const getShifts: RequestHandler = async (req: Request, res: Response) => {
    const shits = await prisma.shift.findMany({
        select: {
            name: true,
            isActive: true,
            shiftId: true,
            startTime: true,
            endTime: true,
        }
    })

    res.status(200).json({
        message: "Fetched shifts successfully!",
        data: shits,
        error: null
    })
}

export {
    getShifts
}