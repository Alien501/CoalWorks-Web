import { Request, RequestHandler, Response } from "express";
import { prisma } from "../../utils/prisma";

const checkIsInit: RequestHandler = async (req: Request, res: Response) => {
    const init = await prisma.initStatus.findFirst();
    if(!init?.isInit || !init) {
        res.status(200).json({
            message: 'Still application had not been initialised',
            data: false,
            error: null
        })
    }
    res.status(200).json({
        message: 'Appliaction had been initialised already!',
        data: true,
        error: null
    })
}

export {
    checkIsInit
}