import { RequestHandler, Response, Request } from "express";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "../../utils/prisma";

const getAllUsers: RequestHandler = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany({
        // select: {
        //     userId: true,
        //     username: true,
        //     userRole: {
        //         select: {
        //             roleName: true 
        //         }
        //     },
        //     isSupervisor: true
        // }
        include: {
            sections: true,
            userRole:{
                select:{
                    roleName: true
                }
            }
        }
    });
    res.status(200).json({
        data: users
    });
}


export {
    getAllUsers
}
