import { NextFunction, Request, RequestHandler, Response } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";
import { error } from "console";

const SectionItemSchema = z.object({
    itemId: z.number().int().optional(),
    typeId: z.number().int().optional(),
    itemName: z.string().max(255),
})

const SectionSchema = z.object({
    typeId: z.number().int().optional(),
    scaleLevel: z.number().int(),
    name: z.string().max(255),
    description: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    sectionItems: z.array(SectionItemSchema).optional()
})


const insertSectionData: RequestHandler = async (req: Request, res: Response) => {
    const sectionData = z.array(SectionSchema).parse(req.body);
    const createdSections = await prisma.$transaction(async (tx) => {
        const sections = [];
        for (const sectionIp of sectionData) {
            const section = await tx.sectionType.create({
                data: {
                    scaleLevel: sectionIp.scaleLevel,
                    name: sectionIp.name,
                    description: sectionIp.description
                }
            });

            if (sectionIp.sectionItems && sectionIp.sectionItems.length > 0) {
                await tx.sectionItem.createMany({
                    data: sectionIp.sectionItems.map(item => ({
                        typeId: section.typeId,
                        itemName: item.itemName
                    }))
                });
            }

            sections.push(section);
        }

        return sections;
    })

    res.status(201).json({
        message: "Created section successfully!",
        data: createdSections,
        error: null
    })
}

const LargeSectionSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().optional(),
    area: z.number().optional(),
    scaleLevel: z.number().int().min(1, "Scale level must be at least 1"),
    mineId: z.number().optional()
});

const newLargeSection: RequestHandler = async (req: Request, res: Response) => {
    console.log(req.body)
    const largeSectionData = LargeSectionSchema.parse(req.body);

    const sectionType = await prisma.sectionType.findFirst({
        where: {
            scaleLevel: largeSectionData.scaleLevel
        }
    });

    if (!sectionType) {
        res.status(400).json({
            message: 'No matching section type found for the given scale level',
            error: true
        });
    }

    const newSection = await prisma.largeSection.create({
        data: {
            name: largeSectionData.name,
            description: largeSectionData.description,
            area: largeSectionData.area,
            typeId: sectionType?.typeId, // Remove optional chaining, ensure typeId exists
            createdAt: new Date(),
            updatedAt: new Date(),
            ...(largeSectionData.mineId && { insiderToId: largeSectionData.mineId })
        },
        select: {
            area: true,
            mine: true,
            sectionId: true,
            sectionType: true,
            name: true,
            typeId: true
        }
    });

    res.status(201).json({
        message: 'Large section created successfully',
        data: newSection,
        error: null
    });
}

const GetSectionsSchema = z.object({
    scaleLevel: z.number().gte(1, "Invalid section type").lte(5, "Invalid section type")
})

const getSections: RequestHandler = async (req: Request, res: Response) => {
    const scaleLevel = Number(req.params.scaleLevel);

    const validatedData = GetSectionsSchema.parse({scaleLevel});

    let data: any[] = [];

    switch (validatedData.scaleLevel) {
        case 5:
            const largeSections = await prisma.largeSection.findMany({
                select: {
                    sectionId: true,
                    name: true,
                    description: true,
                    area: true,
                    mine: true,
                    typeId: true
                }
            });
            data = largeSections;
            break;
        default:
            res.status(404).json({
                message: "Wrong section!",
                error: "Invalid mine type",
                data: null
            })
            return;
    }

    res.status(200).json({
        message: "Fetched data successfully!",
        data: data,
        error: null
    })
}

export {
    insertSectionData,
    newLargeSection,
    getSections
}