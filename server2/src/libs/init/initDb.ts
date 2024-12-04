import { Request, RequestHandler, Response } from "express";
import { z } from 'zod';
import { checkIsInit } from "./checkIsInit";
import { prisma } from "../../utils/prisma";
import { generateSalt, hashPassword } from "../../utils/passwordUtils";

const LocationSchema = z.object({
    latitude: z.number(),
    longitude: z.number()
});

const MineSchema = z.object({
    mineName: z.string().max(100),
    location: LocationSchema,
    address: z.string().max(255),
    mineType: z.string().max(50),
    productionCapacity: z.number().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
    isActive: z.boolean().optional().default(true)
});

const OwnerSchema = z.object({
    name: z.string().max(100),
    email: z.string().email().max(100),
    phoneNumber: z.string().max(15),
    address: z.string().max(255)
});

const AdminSchema = z.object({
    name: z.string().max(255),
    email: z.string().email().max(100),
    password: z.string().min(8)
});

export const InitializationSchema = z.object({
    adminConfig: AdminSchema,
    ownerDetails: OwnerSchema,
    mineDetails: z.array(MineSchema)
});

const initDb = async (req: Request, res: Response) => {
    const isInitialised = await prisma.initStatus.findFirst()
    if (isInitialised?.isInit) {
        res.status(400).json({
            message: "Database already initialised",
            error: "Bad request",
            data: null
        })
    }
    const data = InitializationSchema.parse(req.body);
    const d = await prisma.$transaction(async (prisma) => {
        const owner = await prisma.owner.create({
            data: {
                ownerName: data.ownerDetails.name,
                contactName: data.ownerDetails.name,
                contactEmail: data.ownerDetails.email,
                contactPhone: data.ownerDetails.phoneNumber
            }
        });

        const mines = await Promise.all(
            data.mineDetails.map(mine =>
                prisma.mine.create({
                    data: {
                        mineName: mine.mineName,
                        locationLatitude: mine.location.latitude,
                        locationLongitude: mine.location.longitude,
                        address: mine.address,
                        mineType: mine.mineType,
                        productionCapacity: mine.productionCapacity || 0,
                        operationalStatus: mine.isActive,
                        startDate: mine.startDate,
                        endDate: mine.endDate,
                        ownerId: owner.ownerId
                    }
                })
            )
        );

        const salt = generateSalt();
        const passwordHash = hashPassword(data.adminConfig.password, salt);

        await prisma.superAdmin.create({
            data: {
                name: data.adminConfig.name,
                passwordHash,
                salt,
                email: data.adminConfig.email
            }
        });

        await prisma.initStatus.upsert({
            where: { id: 1 },
            update: { isInit: true },
            create: { isInit: true }
        });
        return { owner, mines };
    });

    res.status(200).json({
        message: "Database initialised successfully!",
        error: null,
        data: d
    })
}

export {
    initDb
}