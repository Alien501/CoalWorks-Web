//@ts-nocheck
import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { 
  createNewShiftTemplate, 
  getAllShiftTemplates, 
  getShiftTemplateById, 
  updateShiftTemplate, 
  deleteShiftTemplate 
} from "../libs/config/shiftTemplate";

const shiftTemplateRouter = Router();

// Get all shift templates for a section
shiftTemplateRouter.get('/section/:sectionId', asyncHandler(async (req: Request, res: Response) => {
  await getAllShiftTemplates(req, res);
}));

// Get a specific shift template by ID
shiftTemplateRouter.get('/:templateId', asyncHandler(async (req: Request, res: Response) => {
  await getShiftTemplateById(req, res);
}));

// Create a new shift template
shiftTemplateRouter.post('/create', asyncHandler(async (req: Request, res: Response) => {
  await createNewShiftTemplate(req, res);
}));

// Update an existing shift template
shiftTemplateRouter.patch('/:templateId', asyncHandler(async (req: Request, res: Response) => {
  await updateShiftTemplate(req, res);
}));

// Delete a shift template
shiftTemplateRouter.delete('/:templateId', asyncHandler(async (req: Request, res: Response) => {
  await deleteShiftTemplate(req, res);
}));

export {
  shiftTemplateRouter
};
