import { Router, Request, Response, NextFunction } from "express";
import { createUser } from "../libs/user/createUser";

const router = Router();

const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) => 
    (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };

router.get('/', asyncHandler(async (req: Request, res: Response) => {
    res.status(200).send({
        message: 'Server Working fine',
        error: null,
        data: null,
    });
}));

router.post('/user/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createUser(req, res, next);
}))

export { router };
