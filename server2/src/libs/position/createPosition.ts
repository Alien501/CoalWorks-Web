import { Request, RequestHandler, Response } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";
import { error } from "console";

const ResponsibilitiesSchema = z.object({
    responsibility: z.string()
})

const CreatePositionSchema = z.object({
    positionName: z.string().min(3, "Position Name should be minimum 3 charatcers"),
    description: z.string().max(255, "Description can be only 255 characters max"),
    responsibilities: z.array(ResponsibilitiesSchema)
})

const createPosition: RequestHandler = async (req: Request, res: Response) => {
    const validatedData = CreatePositionSchema.parse(req.body);
 
    // TODO: need to check if role is created by admin
    
    const newPosition = await prisma.position.create(
        {
            data: {
                positionName: validatedData.positionName,
                description: validatedData.description,
                responsibilities: validatedData.responsibilities,
                isActive: true
            },
            select: {
                positionId: true,
                positionName: true
            }
        }
    )

    res.status(201).json({
        message: 'Position created successfully!',
        data: newPosition,
        error: null
    })
}

export {
    createPosition
}