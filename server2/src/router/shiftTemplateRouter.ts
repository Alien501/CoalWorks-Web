//@ts-nocheck
import { Router, Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { 
  createNewShiftTemplate, 
  getAllShiftTemplates, 
  getShiftTemplateById, 
  updateShiftTemplate, 
  deleteShiftTemplate 
} from "../libs/config/shiftTemplate";

const shiftTemplateRouter = Router();

/**
 * @swagger
 * tags:
 *   - name: Shift Template
 */

/**
 * @swagger
 * path:
 * /shifttemplate/section/{sectionId}:
 *   get:
 *     summary: Get all shift templates for a section
 *     description: Retrieves all shift templates associated with a specific section.
 *     tags: [Shift Templates]
 *     parameters:
 *       - in: path
 *         name: sectionId
 *         required: true
 *         description: The ID of the section for which shift templates are to be fetched.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Shift templates retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Shift templates retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       shiftId:
 *                         type: integer
 *                         example: 1
 *                       sectionId:
 *                         type: integer
 *                         example: 1
 *                       questions:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             question:
 *                               type: string
 *                               example: "What is your name?"
 *                             responseType:
 *                               type: string
 *                               example: "TEXT"
 *                             multipleChoiceOptions:
 *                               type: array
 *                               items:
 *                                 type: string
 *                                 example: ["Option 1", "Option 2"]
 *       500:
 *         description: Failed to retrieve shift templates
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Failed to retrieve shift templates
 *                 error:
 *                   type: string
 *                   example: "Error message"
 */
shiftTemplateRouter.get('/section/:sectionId', asyncHandler(async (req: Request, res: Response) => {
  await getAllShiftTemplates(req, res);
}));

/**
 * @swagger
 * path:
 * /shifttemplate/{templateId}:
 *   get:
 *     summary: Get a specific shift template by ID
 *     description: Retrieves a specific shift template by its ID.
 *     tags: [Shift Templates]
 *     parameters:
 *       - in: path
 *         name: templateId
 *         required: true
 *         description: The ID of the shift template to be fetched.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Shift template retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Shift template retrieved successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     shiftId:
 *                       type: integer
 *                       example: 1
 *                     sectionId:
 *                       type: integer
 *                       example: 1
 *                     questions:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           question:
 *                             type: string
 *                             example: "What is your name?"
 *                           responseType:
 *                             type: string
 *                             example: "TEXT"
 *                           multipleChoiceOptions:
 *                             type: array
 *                             items:
 *                               type: string
 *                               example: ["Option 1", "Option 2"]
 *       404:
 *         description: Shift template not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Shift template not found
 *       500:
 *         description: Failed to retrieve shift template
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Failed to retrieve shift template
 *                 error:
 *                   type: string
 *                   example: "Error message"
 */
shiftTemplateRouter.get('/:templateId', asyncHandler(async (req: Request, res: Response) => {
  await getShiftTemplateById(req, res);
}));

/**
 * @swagger
 * path:
 * /shifttemplate/create:
 *   post:
 *     summary: Create a new shift template
 *     description: Creates a new shift template with the specified shift ID, section ID, and questions.
 *     tags: [Shift Templates]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               shiftId:
 *                 type: integer
 *                 description: The ID of the shift
 *                 example: 1
 *               sectionId:
 *                 type: integer
 *                 description: The ID of the section
 *                 example: 1
 *               questions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     question:
 *                       type: string
 *                       description: The question text
 *                       example: "What is your name?"
 *                     responseType:
 *                       type: string
 *                       description: The type of response expected (e.g., TEXT, MULTIPLE_CHOICE)
 *                       example: "TEXT"
 *                     multipleChoiceOptions:
 *                       type: array
 *                       items:
 *                         type: string
 *                         example: ["Option 1", "Option 2"]
 *     responses:
 *       201:
 *         description: Shift template created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Shift template created successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     shiftId:
 *                       type: integer
 *                       example: 1
 *                     sectionId:
 *                       type: integer
 *                       example: 1
 *                     questions:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           question:
 *                             type: string
 *                             example: "What is your name?"
 *                           responseType:
 *                             type: string
 *                             example: "TEXT"
 *                           multipleChoiceOptions:
 *                             type: array
 *                             items:
 *                               type: string
 *                               example: ["Option 1", "Option 2"]
 *       500:
 *         description: Failed to create shift template
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Failed to create shift template
 *                 error:
 *                   type: string
 *                   example: "Error message"
 */
shiftTemplateRouter.post('/create', asyncHandler(async (req: Request, res: Response) => {
  await createNewShiftTemplate(req, res);
}));

/**
 * @swagger
 * path:
 * /shifttemplate/{templateId}:
 *   patch:
 *     summary: Update an existing shift template
 *     description: Updates an existing shift template with new shift ID, section ID, and questions.
 *     tags: [Shift Templates]
 *     parameters:
 *       - in: path
 *         name: templateId
 *         required: true
 *         description: The ID of the shift template to be updated.
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               shiftId:
 *                 type: integer
 *                 description: The ID of the shift
 *                 example: 1
 *               sectionId:
 *                 type: integer
 *                 description: The ID of the section
 *                 example: 1
 *               questions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     question:
 *                       type: string
 *                       description: The question text
 *                       example: "What is your name?"
 *                     responseType:
 *                       type: string
 *                       description: The type of response expected (e.g., TEXT, MULTIPLE_CHOICE)
 *                       example: "TEXT"
 *                     multipleChoiceOptions:
 *                       type: array
 *                       items:
 *                         type: string
 *                         example: ["Option 1", "Option 2"]
 *     responses:
 *       200:
 *         description: Shift template updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Shift template updated successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     shiftId:
 *                       type: integer
 *                       example: 1
 *                     sectionId:
 *                       type: integer
 *                       example: 1
 *                     questions:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           question:
 *                             type: string
 *                             example: "What is your name?"
 *                           responseType:
 *                             type: string
 *                             example: "TEXT"
 *                           multipleChoiceOptions:
 *                             type: array
 *                             items:
 *                               type: string
 *                               example: ["Option 1", "Option 2"]
 *       500:
 *         description: Failed to update shift template
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Failed to update shift template
 *                 error:
 *                   type: string
 *                   example: "Error message"
 */
shiftTemplateRouter.patch('/:templateId', asyncHandler(async (req: Request, res: Response) => {
  await updateShiftTemplate(req, res);
}));

/**
 * @swagger
 * path:
 * /shifttemplate/{templateId}:
 *   delete:
 *     summary: Delete a specific shift template
 *     description: Deletes a shift template by its ID.
 *     tags: [Shift Templates]
 *     parameters:
 *       - in: path
 *         name: templateId
 *         required: true
 *         description: The ID of the shift template to be deleted.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Shift template deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Shift template deleted successfully
 *       500:
 *         description: Failed to delete shift template
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Failed to delete shift template
 *                 error:
 *                   type: string
 *                   example: "Error message"
 */
shiftTemplateRouter.delete('/:templateId', asyncHandler(async (req: Request, res: Response) => {
  await deleteShiftTemplate(req, res);
}));

export {
  shiftTemplateRouter
};
