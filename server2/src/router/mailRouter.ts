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
    const priorityWeight = {
        'critical': '900',
        'high': '700',
        'medium': '500',
        'low': '300'
    }[priority] || '500';

    const priorityText = {
        'critical': 'CRITICAL',
        'high': 'HIGH',
        'medium': 'MEDIUM',
        'low': 'LOW'
    }[priority] || 'MEDIUM';

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Task Assignment - CoalWorks Safety System</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #000000; max-width: 600px; margin: 0 auto; padding: 0; background-color: #ffffff;">
            
            <!-- Header -->
            <div style="background-color: #000000; color: #ffffff; padding: 40px 30px; text-align: center; border-bottom: 3px solid #333333;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 300; letter-spacing: 1px;">COALWORKS</h1>
                <p style="margin: 8px 0 0 0; font-size: 14px; font-weight: 300; opacity: 0.8; letter-spacing: 0.5px;">SAFETY MANAGEMENT SYSTEM</p>
            </div>
            
            <!-- Main Content -->
            <div style="background-color: #ffffff; padding: 40px 30px;">
                
                <!-- Priority Badge -->
                <div style="text-align: center; margin-bottom: 30px;">
                    <div style="display: inline-block; background-color: #000000; color: #ffffff; padding: 8px 20px; font-size: 12px; font-weight: ${priorityWeight}; letter-spacing: 1px; text-transform: uppercase;">
                        ${priorityText} PRIORITY
                    </div>
                </div>
                
                <!-- Alert Header -->
                <div style="text-align: center; margin-bottom: 35px;">
                    <h2 style="margin: 0; font-size: 20px; font-weight: 400; color: #000000; letter-spacing: 0.5px;">TASK ASSIGNMENT NOTIFICATION</h2>
                    <div style="width: 60px; height: 2px; background-color: #000000; margin: 15px auto 0;"></div>
                </div>
                
                <!-- Task Details -->
                <div style="background-color: #f8f8f8; border: 1px solid #e0e0e0; padding: 25px; margin-bottom: 25px;">
                    <h3 style="margin: 0 0 20px 0; font-size: 16px; font-weight: 500; color: #000000; text-transform: uppercase; letter-spacing: 0.5px;">Task Information</h3>
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; font-weight: 500; color: #333333; width: 30%; vertical-align: top;">Task:</td>
                            <td style="padding: 8px 0; color: #000000;">${taskTitle}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: 500; color: #333333; vertical-align: top;">Action Plan:</td>
                            <td style="padding: 8px 0; color: #000000;">${actionPlanName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: 500; color: #333333; vertical-align: top;">Alert Type:</td>
                            <td style="padding: 8px 0; color: #000000;">${alertDescription}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: 500; color: #333333; vertical-align: top;">Priority:</td>
                            <td style="padding: 8px 0; color: #000000; font-weight: ${priorityWeight};">${priorityText}</td>
                        </tr>
                    </table>
                </div>
                
                <!-- Action Required -->
                <div style="border-left: 4px solid #000000; padding: 20px; margin-bottom: 30px; background-color: #fafafa;">
                    <h4 style="margin: 0 0 10px 0; font-size: 14px; font-weight: 500; color: #000000; text-transform: uppercase; letter-spacing: 0.5px;">Action Required</h4>
                    <p style="margin: 0; color: #333333; font-size: 14px; line-height: 1.5;">
                        Please review and complete your assigned task as soon as possible. This is a ${priorityText.toLowerCase()} priority task that requires immediate attention.
                    </p>
                </div>
                
                <!-- Instructions -->
                <div style="margin-bottom: 35px;">
                    <h4 style="margin: 0 0 15px 0; font-size: 14px; font-weight: 500; color: #000000; text-transform: uppercase; letter-spacing: 0.5px;">Next Steps</h4>
                    <ul style="margin: 0; padding-left: 20px; color: #333333; font-size: 14px; line-height: 1.6;">
                        <li style="margin-bottom: 8px;">Log into the CoalWorks system to view complete task details</li>
                        <li style="margin-bottom: 8px;">Review all safety protocols and requirements</li>
                        <li style="margin-bottom: 8px;">Coordinate with your team if necessary</li>
                        <li style="margin-bottom: 8px;">Update task status upon completion</li>
                        <li style="margin-bottom: 0;">Report any issues or concerns immediately</li>
                    </ul>
                </div>
                
                <!-- Call to Action -->
                <div style="text-align: center; margin-top: 35px;">
                    <a href="#" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 12px 30px; text-decoration: none; font-size: 14px; font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase; border: 2px solid #000000; transition: all 0.3s ease;">
                        View Task Details
                    </a>
                </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f0f0f0; padding: 25px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                <p style="margin: 0 0 8px 0; font-size: 12px; color: #666666; font-weight: 300;">
                    This is an automated notification from CoalWorks Safety Management System
                </p>
                <p style="margin: 0; font-size: 12px; color: #666666; font-weight: 300;">
                    Please do not reply to this email
                </p>
                <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
                    <p style="margin: 0; font-size: 11px; color: #999999;">
                        © ${new Date().getFullYear()} CoalWorks. All rights reserved.
                    </p>
                </div>
            </div>
        </body>
        </html>
    `;
}

export { router as mailRouter };
