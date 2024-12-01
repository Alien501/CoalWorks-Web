import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { authRouter } from "./authRouter";
import { configRouter } from "./configRouter";
import { sectionRouter } from "./sectionRouter";
import { userRouter } from "./userRouter";
import { roleRouter } from "./roleRouter";
import { positionRouter } from "./positionRouter";
import { shiftRouter } from "./shiftRouter";

const router = Router();

router.get('/', asyncHandler(async (req: Request, res: Response) => {
    res.status(200).send({
        message: 'Server Working fine',
        error: null,
        data: null,
    });
}));

router.use('/login', authRouter)

// router.use(verifyToken);

// Configuration Routes
router.use('/config', configRouter);

// Section Routes
router.use('/section', sectionRouter);

// User Routes
router.use('/user', userRouter);

// Role Routes
router.use('/role', roleRouter);

// Position Routes
router.use('/position', positionRouter)

// Shift Routes
router.use('/shift', shiftRouter);

export { router };
