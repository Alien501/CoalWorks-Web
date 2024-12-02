// @ts-nocheck

import { RequestHandler, Response, Request } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";
import path from "path";
import fs from 'fs/promises'

function checkFileType(file: File) {
    const acceptedTypes = ["pdf", "jpg", "png", "webp", "jpeg", "bitmap", "docx", "pdf"]
    if (file?.name) {
        const fileType = file.name.split(".").pop()?.toLowerCase();
        if (acceptedTypes.includes(fileType)) return true;
    }
    return false;
}

// Dummy
const RoundSections = z.object({
    sectionName: z.string(),
    sectionType: z.string(),
})

const RoundPlanSchema = z.object({
    planName: z.string().min(3, 'Plan Name must be atleast 3 characters long'),
    planDescription: z.string().min(3, "Plan description must be atleast 5 charatcers long"),
    form: z.array(RoundSections),
    notes: z.string().optional(),
    files: z.any().refine((file) => checkFileType(file), "Only .jpg, .png, .webp, .jpeg, .bitmap, .docx, .pdf is supported"),
    assets: z.array(z.object({
        assetId: z.number(),
        assetName: z.string()
    })).optional()
})

// This is how my sample request should be
/*
{
    planName: "Plan 1",
    planDescription: "New description",
    form: [
        {
            sectionName: "New Section",
            sectionType: "New Section Type"
        },...
    ],
    notes: "blah blah blah...",
    files: {File Objext from input type-"select"},
    assets: [
        {
            assetId: 1,
            assetName: "NEw Asset"
        }
    ]
}
*/
const createRounds: RequestHandler = async (req: Request, res: Response) => {
    const validatedData = RoundPlanSchema.parse(req.body);

    const timestamp = Date.now();

    const newRound = await prisma.$transaction(async (prisma) => {
        const createPlan = await prisma.plan.create({
            data: {
                planName: validatedData.planName,
                planDescription: validatedData.planDescription,
                form: validatedData.form,
                notes: validatedData.notes
            }
        });

        const uploadDir = path.join(process.cwd(), 'uploads', 'plans', createPlan.planId.toString());
        await fs.mkdir(uploadDir, {recursive: true});
        let fileRecords;
        if(req.files) {
            fileRecords = await Promise.all(req.files.map(async(file, index) => {
                const fileExtension = path.extname(file.originalName);
                const fileName = `${validatedData.planName}-${timestamp}-${index}${fileExtension}`;
                const filePath = path.join(uploadDir, fileName);

                await fs.writeFile(filePath, file.buffer);

                return prisma.planfiles.create({
                    data: {
                        fileName: fileName,
                        filePath: filePath,
                        type: file.mimetype,
                        planId: createPlan.planId
                    }
                });
            }))
        }
        if (validatedData.assets && validatedData.assets.length > 0) {
            await prisma.planAssets.createMany({
                data: validatedData.assets.map(asset => ({
                    planId: createPlan.planId,
                    assetId: asset.assetId,
                    assetName: asset.assetName
                }))
            });
        }

        return { createPlan, fileRecords };
    })

    res.status(201).json({
        message: "Plan created successfully",
        data: newRound,
        error: null
    })

}

export {
    createRounds
}