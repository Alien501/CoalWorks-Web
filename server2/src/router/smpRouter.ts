import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createRiskMatrix, createRiskMatrixWithRiskValue, deleteRiskMatrix, getAllRiskMatrix, getRiskMatrixById, updateRiskMatrix } from "../libs/smp/riskMatrix";
import { createRiskAssesment, deleteRiskAssessment, getAllRiskAssessments, getRiskAssessmentByID, updateRiskAssessment } from "../libs/smp/riskAssesment";
import { createRiskValues, deleteRiskValues, getAllRiskValues, getRiskValuesById, updateRiskValues } from "../libs/smp/riskValues";

const smpRouter = Router();


// Risk Matrix Routes
smpRouter.post('/', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await createRiskMatrixWithRiskValue(req, res);
}))

smpRouter.post('/rm', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await createRiskMatrix(req, res);
}))

smpRouter.get('/rm', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getAllRiskMatrix(req, res);
}))

smpRouter.get('/rm/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getRiskMatrixById(req, res);
}))

smpRouter.put('/rm/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
   await updateRiskMatrix(req, res);
}))

smpRouter.delete('/rm/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await deleteRiskMatrix(req, res);
}))

// Risk Value Routes
smpRouter.post('/rv', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await createRiskValues(req, res);
}))
smpRouter.get('/rv', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getAllRiskValues(req, res);
}))

smpRouter.get('/rv/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getRiskValuesById(req, res);
}))

smpRouter.put('/rv/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await updateRiskValues(req, res);
}))

smpRouter.delete('/rv/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await deleteRiskValues(req, res);
}))

// Risk Assesstemnt Routes
smpRouter.post('/ra', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await createRiskAssesment(req, res);
}))

smpRouter.get('/ra', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getAllRiskAssessments(req, res);
}))

smpRouter.get('/ra/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getRiskAssessmentByID(req, res);
}))

smpRouter.put('/ra/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await updateRiskAssessment(req, res);
}))

smpRouter.delete('/ra/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await deleteRiskAssessment(req, res);
}))

export {
    smpRouter
}