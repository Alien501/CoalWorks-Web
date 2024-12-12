import { NextFunction, Request, Response, Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createRiskMatrix, createRiskMatrixWithRiskValue, deleteRiskMatrix, getAllRiskMatrix, getRiskMatrixById, updateRiskMatrix } from "../libs/smp/riskMatrix";
import { createRiskAssesment, deleteRiskAssessment, getAllRiskAssessments, getRiskAssessmentByID, updateRiskAssessment } from "../libs/smp/riskAssesment";
import { createRiskValues, deleteRiskValues, getAllRiskValues, getRiskValuesById, updateRiskValues } from "../libs/smp/riskValues";
import { getResponseById } from "../libs/smp/riskAssesmentReponse";

const smpRouter = Router();

/**
 * @swagger
 * tags:
 *   - name: SMP
 */

/**
 * @swagger
 * path:
 * /smp:
 *   post:
 *     summary: Create a Risk Matrix with associated Risk Values
 *     description: Creates a risk matrix along with the associated risk values for consequences, probability, and exposure.
 *     tags: [Risk Matrix]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CombinedSchema'
 *     responses:
 *       200:
 *         description: Risk Matrix and associated Risk Values created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 matrixData:
 *                   type: object
 *                   description: The created risk matrix data
 *                 riskValueData:
 *                   type: array
 *                   items:
 *                     type: object
 *                     description: The associated risk values data
 *       400:
 *         description: Invalid request or validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Invalid request
 */
smpRouter.post('/', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await createRiskMatrixWithRiskValue(req, res);
}))

/**
 * @swagger
 * path:
 * /smp/rm:
 *   post:
 *     summary: Create a Risk Matrix
 *     description: Creates a new risk matrix.
 *     tags: [Risk Matrix]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RiskMatrixSchema'
 *     responses:
 *       201:
 *         description: Risk Matrix created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: Sample Risk Matrix
 *       400:
 *         description: Invalid request or validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Invalid request
 */
smpRouter.post('/rm', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await createRiskMatrix(req, res);
}))

/**
 * @swagger
 * path:
 * /smp/rm:
 *   get:
 *     summary: Get all Risk Matrices
 *     description: Retrieves a list of all risk matrices with their associated risk values.
 *     tags: [Risk Matrix]
 *     responses:
 *       200:
 *         description: List of risk matrices retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Sample Risk Matrix
 *                   RiskValues:
 *                     type: array
 *                     items:
 *                       type: object
 *                       description: Risk values associated with the risk matrix
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Failed to retrieve risk matrices
 */
smpRouter.get('/rm', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getAllRiskMatrix(req, res);
}))

/**
 * @swagger
 * path:
 * /smp/rm/{id}:
 *   get:
 *     summary: Get a Risk Matrix by ID
 *     description: Retrieves a specific risk matrix by its ID along with associated risk values.
 *     tags: [Risk Matrix]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the risk matrix to retrieve.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Risk Matrix retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: Sample Risk Matrix
 *                 RiskValues:
 *                   type: array
 *                   items:
 *                     type: object
 *                     description: Risk values associated with the risk matrix
 *       400:
 *         description: Invalid ID provided
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Invalid ID
 *       404:
 *         description: Risk Matrix not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: RiskMatrix not found
 */
smpRouter.get('/rm/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getRiskMatrixById(req, res);
}))

/**
 * @swagger
 * path:
 * /smp/rm/{id}:
 *   put:
 *     summary: Update a Risk Matrix by ID
 *     description: Updates the details of an existing risk matrix.
 *     tags: [Risk Matrix]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the risk matrix to update.
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RiskMatrixUpdateSchema'
 *     responses:
 *       200:
 *         description: Risk Matrix updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: Updated Risk Matrix
 *       400:
 *         description: Invalid ID or request data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Invalid request or ID
 *       404:
 *         description: Risk Matrix not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: RiskMatrix not found
 */
smpRouter.put('/rm/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
   await updateRiskMatrix(req, res);
}))

/**
 * @swagger
 * path:
 * /smp/rm/{id}:
 *   delete:
 *     summary: Delete a Risk Matrix by ID
 *     description: Deletes a specific risk matrix by its ID.
 *     tags: [Risk Matrix]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the risk matrix to delete.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       204:
 *         description: Risk Matrix deleted successfully
 *       400:
 *         description: Invalid ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Invalid ID
 *       404:
 *         description: Risk Matrix not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: RiskMatrix not found
 */
smpRouter.delete('/rm/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await deleteRiskMatrix(req, res);
}))

/**
 * @swagger
 * path:
 * /smp/rv:
 *   post:
 *     summary: Create a new risk value
 *     description: Creates a new risk value (Consequence, Probability, or Exposure) in the system.
 *     tags: [Risk Values]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 enum: [Consequence, Probability, Exposure]
 *                 description: The type of risk value
 *               name:
 *                 type: string
 *                 description: The name of the risk value
 *               scale:
 *                 type: integer
 *                 description: The scale of the risk value
 *               matrixId:
 *                 type: integer
 *                 description: The matrix ID to which the risk value belongs
 *             required:
 *               - type
 *               - name
 *               - scale
 *               - matrixId
 *     responses:
 *       201:
 *         description: Risk value created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RiskValue'
 *       400:
 *         description: Invalid request data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid request"
 */
smpRouter.post('/rv', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await createRiskValues(req, res);
}))

/**
 * @swagger
 * path:
 * /smp/rv:
 *   get:
 *     summary: Get all risk values
 *     description: Retrieves a list of all risk values in the system.
 *     tags: [Risk Values]
 *     responses:
 *       200:
 *         description: A list of all risk values
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RiskValue'
 */
smpRouter.get('/rv', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getAllRiskValues(req, res);
}))

/**
 * @swagger
 * path:
 * /smp/rv/{id}:
 *   get:
 *     summary: Get a specific risk value by ID
 *     description: Retrieves the details of a specific risk value using its ID.
 *     tags: [Risk Values]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the risk value to retrieve.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: A specific risk value
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RiskValue'
 *       400:
 *         description: Invalid ID format
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid ID"
 *       404:
 *         description: Risk value not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "RiskValues not found"
 */
smpRouter.get('/rv/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getRiskValuesById(req, res);
}))

/**
 * @swagger
 * path:
 * /smp/rv/{id}:
 *   put:
 *     summary: Update a specific risk value by ID
 *     description: Updates the details of a specific risk value using its ID.
 *     tags: [Risk Values]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the risk value to update.
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
 *               type:
 *                 type: string
 *                 enum: [Consequence, Probability, Exposure]
 *                 description: The type of risk value
 *               name:
 *                 type: string
 *                 description: The name of the risk value
 *               scale:
 *                 type: integer
 *                 description: The scale of the risk value
 *               matrixId:
 *                 type: integer
 *                 description: The matrix ID to which the risk value belongs
 *     responses:
 *       200:
 *         description: Risk value updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RiskValue'
 *       400:
 *         description: Invalid request data or ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid request"
 *       404:
 *         description: Risk value not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "RiskValues not found"
 */
smpRouter.put('/rv/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await updateRiskValues(req, res);
}))

/**
 * @swagger
 * path:
 * /smp/rv/{id}:
 *   delete:
 *     summary: Delete a specific risk value by ID
 *     description: Deletes a specific risk value using its ID.
 *     tags: [Risk Values]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the risk value to delete.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       204:
 *         description: Risk value deleted successfully
 *       400:
 *         description: Invalid ID format
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid ID"
 *       404:
 *         description: Risk value not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "RiskValues not found"
 */
smpRouter.delete('/rv/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await deleteRiskValues(req, res);
}))


/**
 * @swagger
 * /smp/ra:
 *   post:
 *     summary: Create a new Risk Assessment
 *     tags: [Risk Assessments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               activity:
 *                 type: string
 *               sectionId:
 *                 type: integer
 *               hazard:
 *                 type: string
 *               Mechanism:
 *                 type: string
 *               exposedGroup:
 *                 type: string
 *               description:
 *                 type: string
 *               consequence:
 *                 type: integer
 *               exposure:
 *                 type: integer
 *               probability:
 *                 type: integer
 *               riskValue:
 *                 type: integer
 *               riskControlPlan:
 *                 type: array
 *                 items:
 *                   type: object
 *     responses:
 *       201:
 *         description: Risk Assessment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RiskAssessment'
 *       400:
 *         description: Invalid request data
 */
smpRouter.post('/ra', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await createRiskAssesment(req, res);
}))

/**
 * @swagger
 * /smp/ra:
 *   get:
 *     summary: Get all Risk Assessments
 *     tags: [Risk Assessments]
 *     responses:
 *       200:
 *         description: A list of Risk Assessments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RiskAssessment'
 */
smpRouter.get('/ra', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getAllRiskAssessments(req, res);
}))

/**
 * @swagger
 * /smp/ra/{id}:
 *   get:
 *     summary: Get a Risk Assessment by ID
 *     tags: [Risk Assessments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Risk Assessment ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Risk Assessment found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RiskAssessment'
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Risk Assessment not found
 */
smpRouter.get('/ra/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getRiskAssessmentByID(req, res);
}))

/**
 * @swagger
 * /smp/ra/{id}:
 *   put:
 *     summary: Update a Risk Assessment
 *     tags: [Risk Assessments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Risk Assessment ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RiskAssessment'
 *     responses:
 *       200:
 *         description: Risk Assessment updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RiskAssessment'
 *       400:
 *         description: Invalid request data or ID
 *       404:
 *         description: Risk Assessment not found
 */
smpRouter.put('/ra/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await updateRiskAssessment(req, res);
}))

/**
 * @swagger
 * /smp/ra/{id}:
 *   delete:
 *     summary: Delete a Risk Assessment
 *     tags: [Risk Assessments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Risk Assessment ID
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Risk Assessment deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Risk Assessment not found
 */

smpRouter.get('/ra/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getRiskAssessmentByID(req, res);
}))

smpRouter.get('/rs/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await getResponseById(req, res);
}))


smpRouter.delete('/ra/:id', asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    await deleteRiskAssessment(req, res);
}))

export {
    smpRouter
}