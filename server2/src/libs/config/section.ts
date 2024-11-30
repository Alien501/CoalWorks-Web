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
    mineId: z.number().optional(),
    insiderToId: z.number().optional(),
    model: z.string().optional()
});

const newSection: RequestHandler = async (req: Request, res: Response) => {
    console.log(req.body)
    const validatedData = LargeSectionSchema.parse(req.body);

    const sectionType = await prisma.sectionType.findFirst({
        where: {
            scaleLevel: validatedData.scaleLevel
        }
    });

    if (!sectionType) {
        res.status(400).json({
            message: 'No matching section type found for the given scale level',
            error: true
        });
    }
    let newSection = null;
    switch (validatedData.scaleLevel) {
        case 5:
            newSection = await prisma.largeSection.create({
                data: {
                    name: validatedData.name,
                    description: validatedData.description,
                    area: validatedData.area,
                    typeId: sectionType?.typeId,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    ...(validatedData.mineId && { insiderToId: validatedData.mineId })
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
            break;
        case 4:
            newSection = await prisma.mediumSection.create({
                data: {
                    name: validatedData.name,
                    description: validatedData.description,
                    area: validatedData.area,
                    typeId: sectionType?.typeId,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    ...(validatedData.insiderToId && { insiderToId: validatedData.insiderToId }),
                }
            })
            break;
        case 3:
            newSection = await prisma.smallSection.create({
                data: {
                    name: validatedData.name,
                    description: validatedData.description,
                    area: validatedData.area,
                    typeId: sectionType?.typeId,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    ...(validatedData.insiderToId && { insiderToId: validatedData.insiderToId }),
                }
            })
            break;
        case 2:
            newSection = await prisma.microSection.create({
                data: {
                    name: validatedData.name,
                    description: validatedData.description,
                    area: validatedData.area,
                    typeId: sectionType?.typeId,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    ...(validatedData.insiderToId && { insiderToId: validatedData.insiderToId }),
                }
            })
            break;
        case 1:
            newSection = await prisma.unitSection.create({
                data: {
                    name: validatedData.name,
                    description: validatedData.description,
                    model: validatedData.model,
                    typeId: sectionType?.typeId,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    ...(validatedData.insiderToId && { insiderToId: validatedData.insiderToId }),
                }
            })
            break;
        default:
            break;
    }


    res.status(201).json({
        message: 'Large section created successfully',
        data: newSection,
        error: null
    });
}
// TODO: Merge both function to create a genereic one
// const NewSectioionSchema = z.object({
//     scaleLevel: z.number(),
//     name: z.string(),
//     description: z.string(),
//     area: z.number(),
// })

// const newSection: RequestHandler = async (req: Request, res: Response) => {
//     const validatedData = NewSectioionSchema.parse(NewSectioionSchema);

//     switch (validatedData.scaleLevel) {
//         case 4:
            
//             break;
    
//         default:
//             break;
//     }
// }

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
        case 4:
            const mediumSections = await prisma.mediumSection.findMany({
                select: {
                    name: true,
                    sectionId: true,
                    description: true,
                    area: true,
                    typeId: true,
                    insiderToId: true
                }
            })
            data = mediumSections
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
    newSection,
    getSections
}