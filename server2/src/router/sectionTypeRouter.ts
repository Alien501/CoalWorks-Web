import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createSectionType, getSectionTypeById, updateSectionType, deleteSectionType, getAllSectionTypes } from "../libs/config/sectionType";

const sectionTypeRouter = Router();

/**
 * @swagger
 * /sectiontype:
 *   post:
 *     tags:
 *         - Section Type
 *     summary: Create a new section type
 *     description: Create a new section type with a name, description, and color.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the section type
 *                 example: "Lecture"
 *               description:
 *                 type: string
 *                 description: A description of the section type
 *                 example: "A section for lectures"
 *               color:
 *                 type: string
 *                 description: The hex color code representing the section type
 *                 example: "#ff5733"
 *     responses:
 *       201:
 *         description: Section type created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the created section type
 *                 name:
 *                   type: string
 *                   description: The name of the section type
 *                 description:
 *                   type: string
 *                   description: A description of the section type
 *                 color:
 *                   type: string
 *                   description: The hex color of the section type
 *       400:
 *         description: Bad request, invalid input data
 */
sectionTypeRouter.post('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createSectionType(req, res);
}))

/**
 * @swagger
 * /sectiontype:
 *   get:
 *     tags:
 *         - Section Type
 *     summary: Get all section types
 *     description: Retrieves a list of all section types, including the associated sections.
 *     responses:
 *       200:
 *         description: List of all section types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The ID of the section type
 *                   name:
 *                     type: string
 *                     description: The name of the section type
 *                   description:
 *                     type: string
 *                     description: A description of the section type
 *                   color:
 *                     type: string
 *                     description: The hex color of the section type
 *                   sections:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           description: The ID of the section
 *                         name:
 *                           type: string
 *                           description: The name of the section
 *       500:
 *         description: Server error
 */
sectionTypeRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllSectionTypes(req, res);
}))

/**
 * @swagger
 * /sectiontype/{id}:
 *   get:
 *     tags:
 *         - Section Type
 *     summary: Get a section type by ID
 *     description: Retrieves a section type by its ID, including the associated sections.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the section type to fetch
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The section type with its associated sections
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the section type
 *                 name:
 *                   type: string
 *                   description: The name of the section type
 *                 description:
 *                   type: string
 *                   description: A description of the section type
 *                 color:
 *                   type: string
 *                   description: The hex color of the section type
 *                 sections:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The ID of the section
 *                       name:
 *                         type: string
 *                         description: The name of the section
 *       404:
 *         description: Section type not found
 *       500:
 *         description: Server error
 */
sectionTypeRouter.get('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getSectionTypeById(req, res);
}))

/**
 * @swagger
 * /sectiontype/{id}:
 *   post:
 *     tags:
 *         - Section Type
 *     summary: Update a section type
 *     description: Updates the details of a section type, including name, description, and color.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the section type to update
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
 *                 description: The name of the section type
 *                 example: "Lecture"
 *               description:
 *                 type: string
 *                 description: A description of the section type
 *                 example: "Updated section for lectures"
 *               color:
 *                 type: string
 *                 description: The hex color code representing the section type
 *                 example: "#33ff57"
 *     responses:
 *       200:
 *         description: Section type updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the section type
 *                 name:
 *                   type: string
 *                   description: The name of the section type
 *                 description:
 *                   type: string
 *                   description: A description of the section type
 *                 color:
 *                   type: string
 *                   description: The hex color of the section type
 *       400:
 *         description: Bad request, invalid input data
 *       404:
 *         description: Section type not found
 */
sectionTypeRouter.post('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateSectionType(req, res);
}))

/**
 * @swagger
 * /sectiontype/{id}:
 *   delete:
 *     tags:
 *         - Section Type
 *     summary: Delete a section type by ID
 *     description: Deletes a section type by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the section type to delete
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Section type deleted successfully
 *       409:
 *         description: Section type cannot be deleted due to a foreign key constraint
 *       500:
 *         description: Server error
 */
sectionTypeRouter.delete('/:id', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteSectionType(req, res);
}))

export {
    sectionTypeRouter
}