import { Router, Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { prisma } from '../utils/prisma';
import zeptoMailService from '../libs/email/zeptomailDirectService';

const router = Router();

/**
 * @swagger
 * /api/v1/action-plans:
 *   get:
 *     summary: Get all action plans
 *     description: Retrieve all action plans with their SMPs and tasks
 *     tags: [Action Plans]
 *     responses:
 *       200:
 *         description: Action plans retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Internal server error
 */
router.get('/', asyncHandler(async (req: Request, res: Response) => {
    try {
        const actionPlans = await prisma.actionPlan.findMany({
            include: {
                creator: {
                    select: {
                        userId: true,
                        username: true,
                        email: true
                    }
                },
                smps: {
                    include: {
                        tasks: {
                            include: {
                                assignee: {
                                    select: {
                                        userId: true,
                                        username: true,
                                        email: true
                                    }
                                }
                            },
                            orderBy: {
                                order: 'asc'
                            }
                        }
                    },
                    orderBy: {
                        order: 'asc'
                    }
                },
                _count: {
                    select: {
                        smps: true,
                        alerts: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        res.status(200).json({
            message: 'Action plans retrieved successfully',
            error: null,
            data: actionPlans
        });

    } catch (error) {
        console.error('Error retrieving action plans:', error);
        res.status(500).json({
            message: 'Failed to retrieve action plans',
            error: error instanceof Error ? error.message : 'Unknown error',
            data: null
        });
    }
}));

/**
 * @swagger
 * /api/v1/action-plans:
 *   post:
 *     summary: Create a new action plan
 *     description: Create a new action plan with SMPs and tasks
 *     tags: [Action Plans]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - createdBy
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               priority:
 *                 type: string
 *                 enum: [low, medium, high, critical]
 *               createdBy:
 *                 type: integer
 *               smps:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     description:
 *                       type: string
 *                     order:
 *                       type: integer
 *                     estimatedDuration:
 *                       type: integer
 *                     tasks:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           title:
 *                             type: string
 *                           description:
 *                             type: string
 *                           order:
 *                             type: integer
 *                           assignedTo:
 *                             type: integer
 *                           dueDate:
 *                             type: string
 *                             format: date-time
 *     responses:
 *       201:
 *         description: Action plan created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/', asyncHandler(async (req: Request, res: Response) => {
    try {
        const { name, description, priority, createdBy, smps } = req.body;

        if (!name || !createdBy) {
            res.status(400).json({
                message: 'Name and createdBy are required',
                error: 'MISSING_REQUIRED_FIELDS',
                data: null
            });
            return;
        }

        const actionPlan = await prisma.actionPlan.create({
            data: {
                name,
                description,
                priority: priority || 'medium',
                createdBy,
                smps: {
                    create: smps?.map((smp: any) => ({
                        name: smp.name,
                        description: smp.description,
                        order: smp.order,
                        estimatedDuration: smp.estimatedDuration,
                        tasks: {
                            create: smp.tasks?.map((task: any) => ({
                                title: task.title,
                                description: task.description,
                                order: task.order,
                                assignedTo: task.assignedTo,
                                dueDate: task.dueDate ? new Date(task.dueDate) : null
                            })) || []
                        }
                    })) || []
                }
            },
            include: {
                creator: {
                    select: {
                        userId: true,
                        username: true,
                        email: true
                    }
                },
                smps: {
                    include: {
                        tasks: {
                            include: {
                                assignee: {
                                    select: {
                                        userId: true,
                                        username: true,
                                        email: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        res.status(201).json({
            message: 'Action plan created successfully',
            error: null,
            data: actionPlan
        });

    } catch (error) {
        console.error('Error creating action plan:', error);
        res.status(500).json({
            message: 'Failed to create action plan',
            error: error instanceof Error ? error.message : 'Unknown error',
            data: null
        });
    }
}));

/**
 * @swagger
 * /api/v1/action-plans/{id}:
 *   get:
 *     summary: Get action plan by ID
 *     description: Retrieve a specific action plan with all details
 *     tags: [Action Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Action plan ID
 *     responses:
 *       200:
 *         description: Action plan retrieved successfully
 *       404:
 *         description: Action plan not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', asyncHandler(async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const actionPlanId = parseInt(id);

        const actionPlan = await prisma.actionPlan.findUnique({
            where: { id: actionPlanId },
            include: {
                creator: {
                    select: {
                        userId: true,
                        username: true,
                        email: true
                    }
                },
                smps: {
                    include: {
                        tasks: {
                            include: {
                                assignee: {
                                    select: {
                                        userId: true,
                                        username: true,
                                        email: true
                                    }
                                }
                            },
                            orderBy: {
                                order: 'asc'
                            }
                        }
                    },
                    orderBy: {
                        order: 'asc'
                    }
                },
                alerts: {
                    orderBy: {
                        triggeredAt: 'desc'
                    }
                }
            }
        });

        if (!actionPlan) {
            res.status(404).json({
                message: 'Action plan not found',
                error: 'ACTION_PLAN_NOT_FOUND',
                data: null
            });
            return;
        }

        res.status(200).json({
            message: 'Action plan retrieved successfully',
            error: null,
            data: actionPlan
        });

    } catch (error) {
        console.error('Error retrieving action plan:', error);
        res.status(500).json({
            message: 'Failed to retrieve action plan',
            error: error instanceof Error ? error.message : 'Unknown error',
            data: null
        });
    }
}));

/**
 * @swagger
 * /api/v1/action-plans/{id}/activate:
 *   post:
 *     summary: Activate an action plan
 *     description: Change the status of an action plan to active
 *     tags: [Action Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Action plan ID
 *     responses:
 *       200:
 *         description: Action plan activated successfully
 *       404:
 *         description: Action plan not found
 *       500:
 *         description: Internal server error
 */
router.post('/:id/activate', asyncHandler(async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const actionPlanId = parseInt(id);

        const actionPlan = await prisma.actionPlan.update({
            where: { id: actionPlanId },
            data: { status: 'active' },
            include: {
                creator: {
                    select: {
                        userId: true,
                        username: true,
                        email: true
                    }
                },
                smps: {
                    include: {
                        tasks: {
                            include: {
                                assignee: {
                                    select: {
                                        userId: true,
                                        username: true,
                                        email: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        // Send emails to all assigned users
        const emailAssignments = [];
        for (const smp of actionPlan.smps) {
            for (const task of smp.tasks) {
                if (task.assignedTo && task.assignee) {
                    emailAssignments.push({
                        email: task.assignee.email,
                        username: task.assignee.username,
                        taskTitle: task.title,
                        actionPlanName: actionPlan.name,
                        priority: actionPlan.priority,
                        dueDate: task.dueDate?.toISOString()
                    });
                }
            }
        }

        // Send bulk emails
        if (emailAssignments.length > 0) {
            try {
                const emailResults = await zeptoMailService.sendBulkTaskAssignmentEmails(emailAssignments);
                console.log('Email sending results:', emailResults);
            } catch (emailError) {
                console.error('Error sending emails:', emailError);
                // Don't fail the activation if emails fail
            }
        }

        res.status(200).json({
            message: 'Action plan activated successfully and emails sent to assigned users',
            error: null,
            data: {
                ...actionPlan,
                emailsSent: emailAssignments.length
            }
        });

    } catch (error) {
        console.error('Error activating action plan:', error);
        res.status(500).json({
            message: 'Failed to activate action plan',
            error: error instanceof Error ? error.message : 'Unknown error',
            data: null
        });
    }
}));

/**
 * @swagger
 * /api/v1/action-plans/{id}/alerts:
 *   post:
 *     summary: Create an alert for an action plan
 *     description: Create a new alert associated with an action plan
 *     tags: [Action Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Action plan ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - createdBy
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               severity:
 *                 type: string
 *                 enum: [low, medium, high, critical]
 *               createdBy:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Alert created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/:id/alerts', asyncHandler(async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, description, severity, createdBy } = req.body;
        const actionPlanId = parseInt(id);

        if (!title || !createdBy) {
            res.status(400).json({
                message: 'Title and createdBy are required',
                error: 'MISSING_REQUIRED_FIELDS',
                data: null
            });
            return;
        }

        const alert = await prisma.alert.create({
            data: {
                title,
                description,
                severity: severity || 'medium',
                actionPlanId,
                createdBy
            },
            include: {
                creator: {
                    select: {
                        userId: true,
                        username: true,
                        email: true
                    }
                },
                actionPlan: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });

        res.status(201).json({
            message: 'Alert created successfully',
            error: null,
            data: alert
        });

    } catch (error) {
        console.error('Error creating alert:', error);
        res.status(500).json({
            message: 'Failed to create alert',
            error: error instanceof Error ? error.message : 'Unknown error',
            data: null
        });
    }
}));

/**
 * @swagger
 * /api/v1/action-plans/alerts:
 *   get:
 *     summary: Get all alerts
 *     description: Retrieve all alerts with their associated action plans
 *     tags: [Action Plans]
 *     responses:
 *       200:
 *         description: Alerts retrieved successfully
 *       500:
 *         description: Internal server error
 */
router.get('/alerts', asyncHandler(async (req: Request, res: Response) => {
    try {
        const alerts = await prisma.alert.findMany({
            include: {
                creator: {
                    select: {
                        userId: true,
                        username: true,
                        email: true
                    }
                },
                actionPlan: {
                    select: {
                        id: true,
                        name: true,
                        priority: true
                    }
                }
            },
            orderBy: {
                triggeredAt: 'desc'
            }
        });

        res.status(200).json({
            message: 'Alerts retrieved successfully',
            error: null,
            data: alerts
        });

    } catch (error) {
        console.error('Error retrieving alerts:', error);
        res.status(500).json({
            message: 'Failed to retrieve alerts',
            error: error instanceof Error ? error.message : 'Unknown error',
            data: null
        });
    }
}));

/**
 * @swagger
 * /api/v1/action-plans/send-task-notification:
 *   post:
 *     summary: Send task notification email
 *     description: Send email notification to a user about their assigned task
 *     tags: [Action Plans]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - to
 *               - username
 *               - taskTitle
 *               - actionPlanName
 *             properties:
 *               to:
 *                 type: string
 *                 format: email
 *               username:
 *                 type: string
 *               taskTitle:
 *                 type: string
 *               actionPlanName:
 *                 type: string
 *               priority:
 *                 type: string
 *                 enum: [low, medium, high, critical]
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Email sent successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/send-task-notification', asyncHandler(async (req: Request, res: Response) => {
    try {
        const { to, username, taskTitle, actionPlanName, priority, dueDate } = req.body;

        if (!to || !username || !taskTitle || !actionPlanName) {
            res.status(400).json({
                message: 'Missing required fields: to, username, taskTitle, actionPlanName',
                error: 'MISSING_REQUIRED_FIELDS',
                data: null
            });
            return;
        }

        const result = await zeptoMailService.sendTaskAssignmentEmail(
            to,
            username,
            taskTitle,
            actionPlanName,
            priority || 'medium',
            dueDate
        );

        res.status(200).json({
            message: 'Task notification email sent successfully',
            error: null,
            data: result
        });

    } catch (error) {
        console.error('Error sending task notification email:', error);
        res.status(500).json({
            message: 'Failed to send task notification email',
            error: error instanceof Error ? error.message : 'Unknown error',
            data: null
        });
    }
}));

/**
 * @swagger
 * /api/v1/action-plans/test-email:
 *   post:
 *     summary: Test email functionality
 *     description: Send a test email to verify ZeptoMail integration
 *     tags: [Action Plans]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - to
 *             properties:
 *               to:
 *                 type: string
 *                 format: email
 *               username:
 *                 type: string
 *                 default: "Test User"
 *     responses:
 *       200:
 *         description: Test email sent successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/test-email', asyncHandler(async (req: Request, res: Response) => {
    try {
        const { to, username = 'Test User' } = req.body;

        if (!to) {
            res.status(400).json({
                message: 'Email address is required',
                error: 'MISSING_EMAIL',
                data: null
            });
            return;
        }

        const result = await zeptoMailService.sendTaskAssignmentEmail(
            to,
            username,
            'Test Task Assignment',
            'Test Action Plan',
            'medium',
            new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours from now
        );

        res.status(200).json({
            message: 'Test email sent successfully',
            error: null,
            data: result
        });

    } catch (error) {
        console.error('Error sending test email:', error);
        res.status(500).json({
            message: 'Failed to send test email',
            error: error instanceof Error ? error.message : 'Unknown error',
            data: null
        });
    }
}));

export { router as actionPlanRouter };
