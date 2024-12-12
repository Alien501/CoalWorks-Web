// @ts-nocheck

import { Router } from "express";
import { 
  createDgmsFile, 
  getAllDgmsFiles, 
  getDgmsFileById,
  serveDgmsFile 
} from "../libs/dgms/dgms";
import { asyncHandler } from "../utils/asyncHandler";

const dgmsRouter = Router();

dgmsRouter.post('/', createDgmsFile);

dgmsRouter.get('/', asyncHandler(getAllDgmsFiles));

dgmsRouter.get('/:id', asyncHandler(getDgmsFileById));

dgmsRouter.get('/:id/download', asyncHandler(serveDgmsFile));

export { dgmsRouter };