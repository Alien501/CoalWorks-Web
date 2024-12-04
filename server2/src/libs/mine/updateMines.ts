import { Request, RequestHandler, Response } from "express";
import { date, z } from 'zod'
import { prisma } from "../../utils/prisma";

const UpdateMineSchema = z.object({
    mineId: z.number(),
    mineName: z.string().optional(),
    location: z.object(
        {
            latitude: z.number(),
            longitude: z.number(),
        }
    ).optional(),
    address: z.string().optional(),
    mineType: z.string().optional(),
    productionCapacity: z.number().optional(),
    operationalStatus: z.boolean().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional()
})

const updateMines: RequestHandler = async (req: Request, res: Response) => {
    const validatedData = UpdateMineSchema.parse(req.body);

    const updateMine = await prisma.mine.update({
        where: {
            mineId: validatedData.mineId
        },
        data: {
            ...validatedData
        }
    })

    res.status(200).json({
        message: "Data updated successfull!",
        data: updateMine,
        error: null
    })

}

export {
    updateMines
}