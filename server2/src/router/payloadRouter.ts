import { Router, Request, Response } from 'express';
import { PrismaClient } from '../utils/generated';
import { asyncHandler } from '../utils/asyncHandler';
import zeptoMailDirectService from '../libs/email/zeptomailDirectService';

interface UserAssignment {
    email: string;
    username: string;
    taskTitle: string;
    smpName: string;
}

const router = Router();
const prisma = new PrismaClient();

/**
 * @swagger
 * /api/v1/payload:
 *   post:
 *     summary: Save sensor payload data
 *     description: Endpoint to save sensor data including RMS values, position changes, and rockfall detection
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - timestamp
 *               - x_RMS
 *               - y_RMS
 *               - z_RMS
 *               - x_position_change
 *               - y_position_change
 *               - z_position_change
 *               - current_z_ste
 *               - current_z_freq10
 *               - rockfall_detected
 *             properties:
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *                 description: Timestamp of the sensor reading
 *               x_RMS:
 *                 type: number
 *                 description: RMS value for X axis
 *               y_RMS:
 *                 type: number
 *                 description: RMS value for Y axis
 *               z_RMS:
 *                 type: number
 *                 description: RMS value for Z axis
 *               x_position_change:
 *                 type: number
 *                 description: Position change in X axis
 *               y_position_change:
 *                 type: number
 *                 description: Position change in Y axis
 *               z_position_change:
 *                 type: number
 *                 description: Position change in Z axis
 *               current_z_ste:
 *                 type: number
 *                 description: Current Z STE value
 *               current_z_freq10:
 *                 type: number
 *                 description: Current Z frequency 10 value
 *               rockfall_detected:
 *                 type: boolean
 *                 description: Whether rockfall was detected
 *     responses:
 *       201:
 *         description: Payload data saved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                     x_RMS:
 *                       type: number
 *                     y_RMS:
 *                       type: number
 *                     z_RMS:
 *                       type: number
 *                     x_position_change:
 *                       type: number
 *                     y_position_change:
 *                       type: number
 *                     z_position_change:
 *                       type: number
 *                     current_z_ste:
 *                       type: number
 *                     current_z_freq10:
 *                       type: number
 *                     rockfall_detected:
 *                       type: boolean
 *       400:
 *         description: Bad request - Invalid payload data
 *       500:
 *         description: Internal server error
 */
router.post('/', asyncHandler(async (req: Request, res: Response) => {
    const {
        timestamp,
        x_RMS,
        y_RMS,
        z_RMS,
        x_position_change,
        y_position_change,
        z_position_change,
        current_z_ste,
        current_z_freq10,
        rockfall_detected
    } = req.body;

    // Validate required fields
    if (!timestamp || x_RMS === undefined || y_RMS === undefined || z_RMS === undefined ||
        x_position_change === undefined || y_position_change === undefined || z_position_change === undefined ||
        current_z_ste === undefined || current_z_freq10 === undefined || rockfall_detected === undefined) {
        res.status(400).json({
            message: 'Missing required fields',
            error: 'All fields are required',
            data: null
        });
        return;
    }

    // Validate data types
    if (typeof x_RMS !== 'number' || typeof y_RMS !== 'number' || typeof z_RMS !== 'number' ||
        typeof x_position_change !== 'number' || typeof y_position_change !== 'number' || typeof z_position_change !== 'number' ||
        typeof current_z_ste !== 'number' || typeof current_z_freq10 !== 'number' || typeof rockfall_detected !== 'boolean') {
        res.status(400).json({
            message: 'Invalid data types',
            error: 'All numeric fields must be numbers and rockfall_detected must be boolean',
            data: null
        });
        return;
    }

    try {
        // Parse timestamp to ensure it's a valid date
        const parsedTimestamp = new Date(timestamp);
        if (isNaN(parsedTimestamp.getTime())) {
            res.status(400).json({
                message: 'Invalid timestamp format',
                error: 'Timestamp must be a valid date',
                data: null
            });
            return;
        }

        // Save payload data to database
        const payload = await prisma.payload.create({
            data: {
                timestamp: parsedTimestamp,
                x_RMS,
                y_RMS,
                z_RMS,
                x_position_change,
                y_position_change,
                z_position_change,
                current_z_ste,
                current_z_freq10,
                rockfall_detected
            }
        });

        res.status(201).json({
            message: 'Payload data saved successfully',
            error: null,
            data: payload
        });
    } catch (error) {
        console.error('Error saving payload data:', error);
        res.status(500).json({
            message: 'Failed to save payload data',
            error: 'Internal server error',
            data: null
        });
    }
}));

/**
 * @swagger
 * /api/v1/payload/rockfall-alerts:
 *   get:
 *     summary: Get rockfall alerts
 *     description: Fetch all payload data where rockfall_detected is true, ordered by timestamp (newest first)
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 50
 *         description: Maximum number of alerts to return
 *     responses:
 *       200:
 *         description: List of rockfall alerts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 *                       x_RMS:
 *                         type: number
 *                       y_RMS:
 *                         type: number
 *                       z_RMS:
 *                         type: number
 *                       x_position_change:
 *                         type: number
 *                       y_position_change:
 *                         type: number
 *                       z_position_change:
 *                         type: number
 *                       current_z_ste:
 *                         type: number
 *                       current_z_freq10:
 *                         type: number
 *                       rockfall_detected:
 *                         type: boolean
 *       500:
 *         description: Internal server error
 */
router.get('/rockfall-alerts', asyncHandler(async (req: Request, res: Response) => {
    try {
        const limit = parseInt(req.query.limit as string) || 50;
        
        // Fetch payload data where rockfall_detected is true, ordered by timestamp (newest first)
        const rockfallAlerts = await prisma.payload.findMany({
            where: {
                rockfall_detected: true
            },
            orderBy: {
                timestamp: 'desc'
            },
            take: limit
        });

        res.status(200).json({
            message: 'Rockfall alerts fetched successfully',
            error: null,
            data: rockfallAlerts
        });
    } catch (error) {
        console.error('Error fetching rockfall alerts:', error);
        res.status(500).json({
            message: 'Failed to fetch rockfall alerts',
            error: 'Internal server error',
            data: null
        });
    }
}));

/**
 * @swagger
 * /api/v1/payload/action-plans:
 *   get:
 *     summary: Get available action plans for rockfall alerts
 *     description: Fetch all active action plans that can be triggered for rockfall alerts
 *     responses:
 *       200:
 *         description: List of available action plans
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       description:
 *                         type: string
 *                       priority:
 *                         type: string
 *                       status:
 *                         type: string
 *       500:
 *         description: Internal server error
 */
router.get('/action-plans', asyncHandler(async (req: Request, res: Response) => {
    try {
        console.log('Fetching action plans from database...');
        
        // Fetch all available action plans (both draft and active)
        const actionPlans = await prisma.actionPlan.findMany({
            where: {
                status: {
                    in: ['draft', 'active']
                }
            },
            select: {
                id: true,
                name: true,
                description: true,
                priority: true,
                status: true,
                createdAt: true
            },
            orderBy: {
                priority: 'desc'
            }
        });

        console.log('Found action plans:', actionPlans);

        res.status(200).json({
            message: 'Action plans fetched successfully',
            error: null,
            data: actionPlans
        });
    } catch (error) {
        console.error('Error fetching action plans:', error);
        res.status(500).json({
            message: 'Failed to fetch action plans',
            error: 'Internal server error',
            data: null
        });
    }
}));

/**
 * @swagger
 * /api/v1/payload/trigger-action-plan:
 *   post:
 *     summary: Trigger action plan for rockfall alert
 *     description: Send email notifications to assigned users when a rockfall alert triggers an action plan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - alertId
 *               - actionPlanId
 *             properties:
 *               alertId:
 *                 type: integer
 *                 description: ID of the rockfall alert
 *               actionPlanId:
 *                 type: integer
 *                 description: ID of the action plan to trigger
 *     responses:
 *       200:
 *         description: Action plan triggered successfully
 *       400:
 *         description: Bad request - Invalid data
 *       500:
 *         description: Internal server error
 */
router.post('/trigger-action-plan', asyncHandler(async (req: Request, res: Response) => {
    const { alertId, actionPlanId } = req.body;

    if (!alertId || !actionPlanId) {
        res.status(400).json({
            message: 'Missing required fields',
            error: 'alertId and actionPlanId are required',
            data: null
        });
        return;
    }

    try {
        // Get the rockfall alert details
        const alert = await prisma.payload.findUnique({
            where: { id: alertId }
        });

        if (!alert) {
            res.status(404).json({
                message: 'Rockfall alert not found',
                error: 'Alert with the specified ID does not exist',
                data: null
            });
            return;
        }

        // Get the action plan with SMPs and tasks (both draft and active)
        const actionPlan = await prisma.actionPlan.findUnique({
            where: { 
                id: actionPlanId,
                status: {
                    in: ['draft', 'active']
                }
            },
            include: {
                smps: {
                    include: {
                        tasks: {
                            include: {
                                assignee: {
                                    select: {
                                        username: true,
                                        email: true
                                    }
                                }
                            }
                        }
                    },
                    orderBy: { order: 'asc' }
                }
            }
        });

        if (!actionPlan) {
            res.status(404).json({
                message: 'Action plan not found',
                error: 'Action plan with the specified ID does not exist',
                data: null
            });
            return;
        }

        // Collect all unique users from tasks
        const users = new Set<UserAssignment>();
        actionPlan.smps.forEach(smp => {
            smp.tasks.forEach(task => {
                if (task.assignee?.email) {
                    users.add({
                        email: task.assignee.email,
                        username: task.assignee.username,
                        taskTitle: task.title,
                        smpName: smp.name
                    });
                }
            });
        });

        console.log(`Found ${users.size} unique users for action plan: ${actionPlan.name}`);
        console.log('Users:', Array.from(users).map(u => ({ email: u.email, username: u.username, task: u.taskTitle })));

        // Send emails to all assigned users using the email service
        const emailAssignments = Array.from(users).map((user: UserAssignment) => ({
            email: user.email,
            username: user.username,
            taskTitle: user.taskTitle,
            actionPlanName: actionPlan.name,
            priority: actionPlan.priority,
            dueDate: undefined // No due date for rockfall alerts
        }));

        if (emailAssignments.length > 0) {
            try {
                console.log(`Attempting to send ${emailAssignments.length} emails for rockfall alert...`);
                const emailResults = await zeptoMailDirectService.sendBulkTaskAssignmentEmails(emailAssignments);
                console.log('Rockfall alert emails sent successfully:', emailResults);
            } catch (emailError) {
                console.error('Error sending rockfall alert emails:', emailError);
                console.error('Email error details:', {
                    message: (emailError as Error).message,
                    stack: (emailError as Error).stack,
                    assignments: emailAssignments.length
                });
                
                // Fallback: Try individual emails
                console.log('Attempting fallback individual email sending...');
                try {
                    for (const assignment of emailAssignments) {
                        try {
                            await zeptoMailDirectService.sendTaskAssignmentEmail(
                                assignment.email,
                                assignment.username,
                                assignment.taskTitle,
                                assignment.actionPlanName,
                                assignment.priority,
                                assignment.dueDate
                            );
                            console.log(`Fallback email sent to ${assignment.email}`);
                        } catch (individualError) {
                            console.error(`Failed to send individual email to ${assignment.email}:`, (individualError as Error).message);
                        }
                    }
                } catch (fallbackError) {
                    console.error('Fallback email sending also failed:', fallbackError);
                }
            }
        } else {
            console.log('No email assignments found for this action plan');
        }

        res.status(200).json({
            message: 'Action plan triggered successfully',
            error: null,
            data: {
                actionPlanId: actionPlan.id,
                actionPlanName: actionPlan.name,
                emailsSent: emailAssignments.length,
                alertId: alert.id
            }
        });
    } catch (error) {
        console.error('Error triggering action plan:', error);
        res.status(500).json({
            message: 'Failed to trigger action plan',
            error: 'Internal server error',
            data: null
        });
    }
}));

export { router as payloadRouter };
