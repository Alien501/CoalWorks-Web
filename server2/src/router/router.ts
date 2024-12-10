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
import { sectionUserRouter } from "./sectionUserRouter";
import { shiftTemplateRouter } from "./shiftTemplateRouter";
import { smpRouter } from "./smpRouter";
import { hazardRouter } from "./hazardRouter";
import { riskAssesmentResponseRouter } from "./riskAssesmentResponseRouter";

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

router.use('/section', sectionRouter);

router.use('/sectiontype', sectionTypeRouter);

router.use('/user', userRouter);

router.use('/role', roleRouter);

router.use('/position', positionRouter)

router.use('/shift', shiftRouter);

router.use('/asset', assetRouter);

router.use('/assettype', assetTypeRouter);

router.use('/rounds', roundsRouter);

router.use('/supervisor', supervisorRouter);

router.use('/sectionuser', sectionUserRouter);

router.use('/shifttemplate', shiftTemplateRouter);

router.use('/smp', smpRouter);

router.use('/riskresponse', riskAssesmentResponseRouter);

router.use('/hazard', hazardRouter);

export { router };
