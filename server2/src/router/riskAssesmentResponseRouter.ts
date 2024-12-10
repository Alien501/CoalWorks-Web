import { Router, Response, Request, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { deleteResponse, getAllResponses, getResponseByFormId, getResponseById, getResponseByUserId, updateResponse, createResponse } from "../libs/smp/riskAssesmentReponse";

export const riskAssesmentResponseRouter = Router();

riskAssesmentResponseRouter.get("/", async(req: Request, res: Response, next: NextFunction) => {
    await getAllResponses(req, res)
})

riskAssesmentResponseRouter.post("/", async(req: Request, res: Response, next: NextFunction) => {
    await createResponse(req, res)
})

riskAssesmentResponseRouter.get("/:id", async(req: Request, res: Response, next: NextFunction) => {
    await getResponseById(req, res)
})

riskAssesmentResponseRouter.get("/form/:id", async(req: Request, res: Response, next: NextFunction) => {
    await getResponseByFormId(req, res)
})

riskAssesmentResponseRouter.get("/user/:id", async(req: Request, res: Response, next: NextFunction) => {
    await getResponseByUserId(req, res)
})

riskAssesmentResponseRouter.delete("/:id", async(req: Request, res: Response, next: NextFunction) => {
    await deleteResponse(req, res)
})

