import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createSection, deleteSection, getAllSections, getSectionById, updateSection, getSupervisorBySectionId, getAllUsersOfSection } from "../libs/config/section2";


const sectionRouter = Router();

/**
 * @swagger
 * /section:
 *   post:
 *     tags:
 *         - Sections
 *     summary: Create a new Section
 *     description: Creates a new section with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the section
 *               sectionType:
 *                 type: integer
 *                 description: Type of the section
 *               area:
 *                 type: integer
 *                 description: Area of the section (optional)
 *               coordinates:
 *                 type: array
 *                 items:
 *                   type: array
 *                   items:
 *                     type: number
 *                 description: Coordinates of the section (optional)
 *     responses:
 *       201:
 *         description: Section created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Failed to create section
 */
sectionRouter.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createSection(req, res);
}))

/**
 * @swagger
 * /section:
 *   get:
 *     tags:
 *         - Sections
 *     summary: Get all Sections
 *     description: Fetches all sections.
 *     responses:
 *       200:
 *         description: List of all sections
 *       500:
 *         description: Failed to fetch sections
 */
sectionRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllSections(req, res);
}))

/**
 * @swagger
 * /section/users:
 *   get:
 *     tags:
 *         - Sections
 *     summary: Get all users of a section
 *     description: Fetches all non-supervisor users assigned to a section.
 *     responses:
 *       200:
 *         description: A list of non-supervisor users in the section
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: integer
 *                     description: The ID of the user
 *                   username:
 *                     type: string
 *                     description: The username of the user
 *                   email:
 *                     type: string
 *                     description: The email of the user
 *                   phone:
 *                     type: string
 *                     description: The phone number of the user
 *                   isActive:
 *                     type: boolean
 *                     description: Indicates whether the user is active
 *       404:
 *         description: Section not found
 *       500:
 *         description: Failed to fetch users
 */
sectionRouter.get('/users', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllUsersOfSection(req, res);
}))

/**
 * @swagger
 * /section/{id}:
 *   get:
 *     tags:
 *         - Sections
 *     summary: Get Section by ID
 *     description: Fetches a specific section by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the section
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Section found
 *       404:
 *         description: Section not found
 *       500:
 *         description: Failed to fetch section
 */
sectionRouter.get('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getSectionById(req, res);
}))

/**
 * @swagger
 * /section/{id}/supervisors:
 *   get:
 *     tags:
 *         - Sections
 *     summary: Get supervisors by Section ID
 *     description: Fetches supervisors assigned to a specific section.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the section
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of supervisors
 *       404:
 *         description: No supervisors found for this section
 *       500:
 *         description: Failed to fetch supervisors
 */
sectionRouter.get('/:id/supervisors', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getSupervisorBySectionId(req, res);
}))

/**
 * @swagger
 * /section/{id}/users:
 *   get:
 *     tags:
 *         - Sections
 *     summary: Get all users of a section by ID
 *     description: Fetches all non-supervisor users assigned to a specific section using its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the section to fetch users for.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of non-supervisor users in the section
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: integer
 *                     description: The ID of the user
 *                   username:
 *                     type: string
 *                     description: The username of the user
 *                   email:
 *                     type: string
 *                     description: The email of the user
 *                   phone:
 *                     type: string
 *                     description: The phone number of the user
 *                   isActive:
 *                     type: boolean
 *                     description: Indicates whether the user is active
 *       404:
 *         description: Section not found
 *       500:
 *         description: Failed to fetch users due to an internal error
 */
sectionRouter.get('/:id/users', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllUsersOfSection(req, res);
}))

/**
 * @swagger
 * /section/{id}:
 *   post:
 *     tags:
 *         - Sections
 *     summary: Update a Section by ID
 *     description: Updates the details of an existing section.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the section to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the section
 *               sectionType:
 *                 type: integer
 *                 description: Type of the section
 *               area:
 *                 type: integer
 *                 description: Area of the section (optional)
 *               coordinates:
 *                 type: array
 *                 items:
 *                   type: array
 *                   items:
 *                     type: number
 *                 description: Coordinates of the section (optional)
 *     responses:
 *       200:
 *         description: Section updated successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Failed to update section
 */
sectionRouter.post('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateSection(req, res);
}))

/**
 * @swagger
 * /section/{id}:
 *   delete:
 *     tags:
 *         - Sections
 *     summary: Delete a Section by ID
 *     description: Deletes a section based on its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the section to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Section deleted successfully
 *       404:
 *         description: Section not found
 *       500:
 *         description: Failed to delete section
 */
sectionRouter.delete('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteSection(req, res);
}))


export {
    sectionRouter
}