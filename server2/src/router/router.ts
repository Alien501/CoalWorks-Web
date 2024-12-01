import { Router, Request, Response, NextFunction } from "express";
import { createUser } from "../libs/user/createUser";
import { createRole } from "../libs/role/createRole";
import { createPosition } from "../libs/position/createPosition";
import { getSections, insertSectionData, newSection } from "../libs/config/section";
import { createShifts } from "../libs/shifts/createShifts";
import { getShifts } from "../libs/shifts/getShifts";
import { updateShift } from "../libs/shifts/upadteShift";
import { login } from "../libs/auth/login";
import { getPositions } from "../libs/position/getPositions";
import { updatePosition } from "../libs/position/updatePosition";

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

// Configuration Routes
router.post('/config/section', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await insertSectionData(req, res, next);
}))


// Section Routes
router.get('/section/:scaleLevel', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getSections(req, res, next);
}))

router.post('/section/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await newSection(req, res, next);
}))


// User Routes
router.post('/user/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createUser(req, res, next);
}))


// Role Routes
router.post('/role/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createRole(req, res, next);
}))


// Position Routes
router.get('/position', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getPositions(req, res, next);
}))

router.post('/position/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createPosition(req, res, next);
}))

router.patch('/position/:positionId', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updatePosition(req, res, next);
}))

// Shift Routes
router.get('/shift', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getShifts(req, res, next);
}))

router.post('/shift/create', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await createShifts(req, res, next);
}))

router.patch('/shift/:shiftId', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateShift(req, res, next);
}))

// Auth route
router.post('/login', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await login(req, res);
}))

export { router };
