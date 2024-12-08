import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { 
  assignUsersToSection, 
  getAllUsersOfSection, 
  getSectionsOfUser, 
  removeUsersFromSection 
} from "../libs/config/sectionUser";

const sectionUserRouter = Router();

// Fetch all users of a specific section
sectionUserRouter.get('/:id/users', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  await getAllUsersOfSection(req, res);
}));

// Assign users to a section
sectionUserRouter.post('/assign', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    console.log("reaches the route")
  await assignUsersToSection(req, res);
}));

// Remove users from a section
sectionUserRouter.delete('/remove', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  await removeUsersFromSection(req, res);
}));

// Fetch all sections for a user
sectionUserRouter.get('/user/:userId/sections', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  await getSectionsOfUser(req, res);
}));

export {
  sectionUserRouter
};
