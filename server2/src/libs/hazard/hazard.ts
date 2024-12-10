import { Request, Response } from "express"
import { z } from "zod"
import { prisma } from "../../utils/prisma"

const HazardActivitySchema = z.object({
    name: z.string()
})

const addhazardActivity = async (req: Request, res: Response) => {
    const validatedData = HazardActivitySchema.parse(req.body);
    const data = await prisma.hazardActivity.create({
        data: validatedData
    });

    res.status(200).json(data);
}

const getHazardActivity = async (req: Request, res: Response) => {
    const data = await prisma.hazardActivity.findMany();
    console.log(data)
    res.status(200).json(data)
}

const addHazardHazard = async (req: Request, res: Response) => {
    const validatedData = HazardActivitySchema.parse(req.body);
    const data = await prisma.hazardHazard.create({
        data: validatedData
    });
    res.status(200).json(data);
}

const getHazardHazard = async (req: Request, res: Response) => {
    const data = await prisma.hazardHazard.findMany();

    res.status(200).json(data)
}


const addhazardMechanism = async (req: Request, res: Response) => {
    const validatedData = HazardActivitySchema.parse(req.body);
    const data = await prisma.hazardMechanism.create({
        data: validatedData
    });
    res.status(200).json(data);
}

const getHazardMechanism = async (req: Request, res: Response) => {
    const data = await prisma.hazardMechanism.findMany();

    res.status(200).json(data)
}


const addExposedGroup = async (req: Request, res: Response) => {
    const validatedData = HazardActivitySchema.parse(req.body);
    const data = await prisma.hazardExposedGroup.create({
        data: validatedData
    })
    res.status(200).json(data);
}

const getExposedGroup = async (req: Request, res: Response) => {
    const data = await prisma.hazardExposedGroup.findMany();

    res.status(200).json(data)
}


export {
    addhazardActivity,
    addHazardHazard,
    addhazardMechanism,
    addExposedGroup,
    getHazardActivity,
    getHazardMechanism,
    getExposedGroup,
    getHazardHazard,
    
}