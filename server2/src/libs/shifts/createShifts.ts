import { Request, RequestHandler, Response } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

const CreateShiftSchema = z.object({
    name: z.string().min(5, 'Shift name should be at least 5 characters long'),
    startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format (HH:MM)'),
    endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format (HH:MM)')
})

const createShifts: RequestHandler = async (req: Request, res: Response) => {
    const validatedData = CreateShiftSchema.parse(req.body);
    let data;

    const newShift = await prisma.shift.create({
        data: {
            ...validatedData
        },
        select: {
            name: true,
            shiftId: true,
            startTime: true,
            endTime: true,
            isActive: true
        }
    })

    res.status(201).json({
        message: "Created new shift successfully!",
        data: newShift,
        error: null
    })
}

export {
    createShifts
}