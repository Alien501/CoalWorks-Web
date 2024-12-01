import { Request, RequestHandler, Response } from "express";
import { date, z } from "zod";
import { prisma } from "../../utils/prisma";
import { Prisma } from "../../utils/generated";

const ShiftUpdateSchema = z.object({
    name: z.string().min(5, 'Shift name should be at least 5 characters long').optional(),
    startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format (HH:MM)').optional(),
    endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format (HH:MM)').optional(),
    isActive: z.boolean().optional()
})

const updateShift: RequestHandler = async (req: Request, res: Response) => {
    const { shiftId } = req.params;
    if (!shiftId) {
        res.status(401).json({
            meessage: "Bad request",
            error: "Invalid Shift Details",
            data: null
        })
    }
    const validatedData = ShiftUpdateSchema.parse(req.body);

    const updatedData = await prisma.shift.update({
        where: {
            shiftId: parseInt(shiftId)
        },
        data: {
            ...validatedData
        }
    })
    if (updatedData) {
        res.status(200).json({
            message: "Upadted sucessfully!",
            error: null,
            data: null
        })
    }
}

export {
    updateShift
}