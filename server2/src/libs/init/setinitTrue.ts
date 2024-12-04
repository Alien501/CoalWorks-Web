import { Request, RequestHandler, Response } from "express";
import { prisma } from "../../utils/prisma";

const setinitTrue: RequestHandler  = async (req: Request, res: Response) => {
    const setInint = await prisma.initStatus.create({
        data: {
            isInit: true
        }
    })
    if(setInint) {
        res.status(200).json({
            message: "Inititalisation successfull!",
            data: null,
            error: null
        })
    }
}

export {
    setinitTrue
}