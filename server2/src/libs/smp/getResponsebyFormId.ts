import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

const getResponsebyFormId = async (req: Request, res: Response) => {
    const { formId } = req.params;
    const formResponseData = await prisma.riskAssessmentResponse.findMany({
        where: {
            formId: parseInt(formId)
        }
    })
    res.status(200).json(formResponseData);
}

export {
    getResponsebyFormId
}