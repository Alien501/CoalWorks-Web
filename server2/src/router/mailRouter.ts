import { Router, Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

/**
 * @swagger
 * /api/v1/mail/send-task-notification:
 *   post:
 *     summary: Send task notification email
 *     description: Send email notification to assigned users about their tasks
 *     tags: [Mail]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - to
 *               - subject
 *               - taskTitle
 *               - actionPlanName
 *             properties:
 *               to:
 *                 type: string
 *                 format: email
 *               subject:
 *                 type: string
 *               taskTitle:
 *                 type: string
 *               actionPlanName:
 *                 type: string
 *               alertDescription:
 *                 type: string
 *               priority:
 *                 type: string
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
        const { to, subject, taskTitle, actionPlanName, alertDescription, priority } = req.body;

        if (!to || !subject || !taskTitle || !actionPlanName) {
            res.status(400).json({
                message: 'Missing required fields',
                error: 'MISSING_REQUIRED_FIELDS',
                data: null
            });
            return;
        }

        // For now, we'll simulate sending an email
        // In a real implementation, you would integrate with Zepto Mail or another email service
        console.log('Sending email notification:', {
            to,
            subject,
            taskTitle,
            actionPlanName,
            alertDescription,
            priority
        });

        // Simulate email sending delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Here you would integrate with Zepto Mail API
        // Example integration:
        /*
        const zeptoResponse = await fetch('https://api.zeptomail.com/v1.1/email', {
            method: 'POST',
            headers: {
                'Authorization': `Zoho-enczapikey ${process.env.ZEPTO_MAIL_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: {
                    address: process.env.FROM_EMAIL,
                    name: 'CoalWorks System'
                },
                to: [{
                    email_address: {
                        address: to,
                        name: 'User'
                    }
                }],
                subject: subject,
                htmlbody: generateEmailTemplate(taskTitle, actionPlanName, alertDescription, priority)
            })
        });
        */

        res.status(200).json({
            message: 'Email notification sent successfully',
            error: null,
            data: {
                to,
                subject,
                sentAt: new Date().toISOString()
            }
        });

    } catch (error) {
        console.error('Error sending email notification:', error);
        res.status(500).json({
            message: 'Failed to send email notification',
            error: error instanceof Error ? error.message : 'Unknown error',
            data: null
        });
    }
}));

/**
 * @swagger
 * /api/v1/mail/send-bulk-notifications:
 *   post:
 *     summary: Send bulk task notifications
 *     description: Send email notifications to multiple users about their tasks
 *     tags: [Mail]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - notifications
 *             properties:
 *               notifications:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     to:
 *                       type: string
 *                       format: email
 *                     subject:
 *                       type: string
 *                     taskTitle:
 *                       type: string
 *                     actionPlanName:
 *                       type: string
 *                     alertDescription:
 *                       type: string
 *                     priority:
 *                       type: string
 *     responses:
 *       200:
 *         description: Bulk emails sent successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/send-bulk-notifications', asyncHandler(async (req: Request, res: Response) => {
    try {
        const { notifications } = req.body;

        if (!notifications || !Array.isArray(notifications) || notifications.length === 0) {
            res.status(400).json({
                message: 'Notifications array is required and must not be empty',
                error: 'INVALID_NOTIFICATIONS',
                data: null
            });
            return;
        }

        const results = [];
        const errors = [];

        for (const notification of notifications) {
            try {
                const { to, subject, taskTitle, actionPlanName, alertDescription, priority } = notification;

                if (!to || !subject || !taskTitle || !actionPlanName) {
                    errors.push({
                        to: to || 'unknown',
                        error: 'Missing required fields'
                    });
                    continue;
                }

                // Simulate email sending
                console.log('Sending bulk email notification:', {
                    to,
                    subject,
                    taskTitle,
                    actionPlanName,
                    alertDescription,
                    priority
                });

                // Simulate email sending delay
                await new Promise(resolve => setTimeout(resolve, 500));

                results.push({
                    to,
                    subject,
                    sentAt: new Date().toISOString(),
                    status: 'sent'
                });

            } catch (error) {
                errors.push({
                    to: notification.to || 'unknown',
                    error: error instanceof Error ? error.message : 'Unknown error'
                });
            }
        }

        res.status(200).json({
            message: `Bulk notifications processed. ${results.length} sent, ${errors.length} failed`,
            error: null,
            data: {
                sent: results,
                failed: errors,
                totalProcessed: notifications.length
            }
        });

    } catch (error) {
        console.error('Error sending bulk notifications:', error);
        res.status(500).json({
            message: 'Failed to send bulk notifications',
            error: error instanceof Error ? error.message : 'Unknown error',
            data: null
        });
    }
}));

// Helper function to generate email template
function generateEmailTemplate(taskTitle: string, actionPlanName: string, alertDescription: string, priority: string): string {
    const priorityColor = {
        'critical': '#dc2626',
        'high': '#ea580c',
        'medium': '#d97706',
        'low': '#16a34a'
    }[priority] || '#6b7280';

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Task Notification - CoalWorks</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                <h1 style="margin: 0; font-size: 28px;">CoalWorks System</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Safety & Operations Management</p>
            </div>
            
            <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
                <div style="background: ${priorityColor}; color: white; padding: 15px; border-radius: 8px; margin-bottom: 25px; text-align: center;">
                    <h2 style="margin: 0; font-size: 20px;">🚨 URGENT TASK ASSIGNMENT</h2>
                    <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Priority: ${priority.toUpperCase()}</p>
                </div>
                
                <h3 style="color: #1e3a8a; margin-bottom: 15px;">Task Details</h3>
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                    <p style="margin: 0 0 10px 0;"><strong>Task:</strong> ${taskTitle}</p>
                    <p style="margin: 0 0 10px 0;"><strong>Action Plan:</strong> ${actionPlanName}</p>
                    <p style="margin: 0;"><strong>Alert:</strong> ${alertDescription}</p>
                </div>
                
                <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin-bottom: 25px;">
                    <h4 style="margin: 0 0 10px 0; color: #92400e;">⚠️ Immediate Action Required</h4>
                    <p style="margin: 0; color: #92400e;">Please review and complete your assigned task as soon as possible. This is a ${priority} priority task that requires immediate attention.</p>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <a href="#" style="background: #1e3a8a; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                        View Task Details
                    </a>
                </div>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 0 0 10px 10px; text-align: center; color: #6b7280; font-size: 14px;">
                <p style="margin: 0;">This is an automated notification from CoalWorks Safety Management System</p>
                <p style="margin: 5px 0 0 0;">Please do not reply to this email</p>
            </div>
        </body>
        </html>
    `;
}

export { router as mailRouter };
