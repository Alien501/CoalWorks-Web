import { Request, RequestHandler, Response } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

const ResponsibilitiesSchema = z.object({
    responsibility: z.string().optional()
})

const PositionUpdateScehma = z.object({
    positionName: z.string().min(3, "Position Name should be minimum 3 charatcers").optional(),
    description: z.string().max(255, "Description can be only 255 characters max").optional(),
    responsibilities: z.array(ResponsibilitiesSchema).optional(),
    isActive: z.boolean().optional()
})

const updatePosition: RequestHandler = async (req: Request, res: Response) => {
    const { positionId } = req.params;
    if(!positionId) {
        res.status(400).json({
            message: "Bad request!",
            data: null,
            error: "Missing position id"
        })
    }
    const validatedData = PositionUpdateScehma.parse(req.body);

    const updatedData = await prisma.position.update({
        where: {
            positionId: parseInt(positionId)
        },
        data: {
            ...validatedData
        },
        select: {
            positionName: true,
            description: true,
            isActive: true,
            responsibilities: true,
        }
    })

    if(!updatePosition) {
        res.status(404).json({
            message: "Position not found!",
            error: "Invalid postion details",
            data: null
        })
    }

    res.status(200).json({
        message: "Position had been upadted successfully!",
        data: updatedData,
        error: null
    })
}

export {
    updatePosition
}