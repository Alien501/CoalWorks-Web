import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { authRouter } from "./authRouter";
// import { configRouter } from "./configRouter";
import { sectionRouter } from "./sectionRouter";
import { userRouter } from "./userRouter";
import { roleRouter } from "./roleRouter";
import { positionRouter } from "./positionRouter";
import { shiftRouter } from "./shiftRouter";
import { assetRouter } from "./assetRouter";
import { assetTypeRouter } from "./assetTypeRouter";
import { sectionTypeRouter } from "./sectionTypeRouter";
import { roundsRouter } from "./roundsRouter";
import { initRouter } from "./initRouter";
import { adminRouter } from "./adminRouter";
import { mineRouter } from "./mineRouter";
import { supervisorRouter } from "./supervisorRouter";

const router = Router();

router.get('/', asyncHandler(async (req: Request, res: Response) => {
    res.status(200).send({
        message: 'Server Working fine',
        error: null,
        data: null,
    });
}));

router.use('/auth', authRouter);
router.use('/admin/init', initRouter);
router.use('/admin/op', adminRouter);

router.use('/mine', mineRouter)

// router.use(verifyToken);

// Configuration Routes
// router.use('/config', configRouter);

// Section Routes
router.use('/section', sectionRouter);

router.use('/sectiontype', sectionTypeRouter);

// User Routes
router.use('/user', userRouter);

// Role Routes
router.use('/role', roleRouter);

// Position Routes
router.use('/position', positionRouter)

// Shift Routes
router.use('/shift', shiftRouter);

// Assets Routes
router.use('/asset', assetRouter);
router.use('/assettype', assetTypeRouter);


// Plans
router.use('/rounds', roundsRouter);

router.use('/supervisor', supervisorRouter);
router.use
export { router };
