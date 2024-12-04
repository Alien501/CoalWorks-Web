import { Request, RequestHandler, Response } from "express";
import { date, z } from "zod";
import { prisma } from "../../utils/prisma";

const NewMineSchema = z.object({
    mineName: z.string(),
    location: z.object(
        {
            latitude: z.number(),
            longitude: z.number(),
        }
    ),
    address: z.string(),
    mineType: z.string(),
    productionCapacity: z.number(),
    operationalStatus: z.boolean(),
    startDate: z.string(),
    endDate: z.string().optional()
})

const createMine: RequestHandler = async (req: Request, res: Response) => {
    const validatedData = NewMineSchema.parse(req.body);

    const ownerdata = await prisma.owner.findFirst();

    const newMineData = await prisma.mine.create({
        data: {
            mineName: validatedData.mineName,
            address: validatedData.address,
            locationLatitude: validatedData.location.latitude,
            locationLongitude: validatedData.location.longitude,
            mineType: validatedData.mineType,
            operationalStatus: validatedData.operationalStatus,
            productionCapacity: validatedData.productionCapacity,
            startDate: validatedData.startDate,
            endDate: validatedData.endDate,
            ownerId: ownerdata?.ownerId
        }
    })

    res.status(201).json({
        message: "Mine created successfully!",
        data: newMineData,
        error: null
    })
}

export {
    createMine
}