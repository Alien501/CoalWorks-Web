import { Request, RequestHandler, Response } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";

const getAllRoles: RequestHandler = async (req: Request, res: Response) => {
    const roles = await prisma.role.findMany({
        include:{
            Users: true
        }
    });
    res.status(200).json({
        data: roles,
        error: null
    })
}

const getAllRolesById: RequestHandler = async (req: Request, res: Response) => {
    const roleId = parseInt(req.params.roleId)
    const roles = await prisma.role.findMany({
        where:{
            roleId: roleId
        },
        include:{
            Users: true
        }
    });
    res.status(201).json({
        data: roles,
        error: null
    })
}

export {
    getAllRoles,
    getAllRolesById
}