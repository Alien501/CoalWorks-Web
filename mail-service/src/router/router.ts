import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import { sendBulkMail } from "../libs/sendBulkMail/send";

const router = Router();

router.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await sendBulkMail(req, res);
}))

export {
    router
}