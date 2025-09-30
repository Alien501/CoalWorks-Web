import { config } from 'dotenv';

config();

class ZeptoMailDirectService {
    private token: string;
    private url: string;

    constructor() {
        this.token = process.env.ZEPTOMAIL_TOKEN || '';
        this.url = process.env.ZEPTOMAIL_URL || 'api.zeptomail.in';
        
        if (!this.token) {
            console.warn('ZEPTOMAIL_TOKEN not found in environment variables. Email functionality will not work.');
        }
        
        console.log('ZeptoMail Direct service initialized with URL:', this.url);
        console.log('ZeptoMail token (first 20 chars):', this.token.substring(0, 20) + '...');
    }

    async sendTaskAssignmentEmail(
        to: string,
        username: string,
        taskTitle: string,
        actionPlanName: string,
        priority: string,
        dueDate?: string
    ) {
        try {
            const priorityIcon = this.getPriorityIcon(priority);

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

            const htmlContent = `
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
                        
                        <!-- Greeting -->
                        <div style="margin-bottom: 25px;">
                            <p style="margin: 0; font-size: 16px; color: #333333;">Hello ${username},</p>
                            <p style="margin: 8px 0 0 0; font-size: 14px; color: #666666;">You have been assigned a new task as part of an action plan. Please review the details below and take necessary action.</p>
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
                                    <td style="padding: 8px 0; font-weight: 500; color: #333333; vertical-align: top;">Priority:</td>
                                    <td style="padding: 8px 0; color: #000000; font-weight: ${priorityWeight};">${priorityText}</td>
                                </tr>
                                ${dueDate ? `<tr>
                                    <td style="padding: 8px 0; font-weight: 500; color: #333333; vertical-align: top;">Due Date:</td>
                                    <td style="padding: 8px 0; color: #000000;">${new Date(dueDate).toLocaleString()}</td>
                                </tr>` : ''}
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

            const mailData = {
                from: {
                    address: process.env.ZEPTOMAIL_FROM_EMAIL || 'no-reply@alien501.in',
                    name: 'CoalWorks Safety System'
                },
                to: [
                    {
                        email_address: {
                            address: to,
                            name: username
                        }
                    }
                ],
                subject: `🚨 Task Assignment: ${taskTitle} - ${actionPlanName}`,
                htmlbody: htmlContent
            };

            console.log('Sending email with data:', {
                from: mailData.from,
                to: mailData.to,
                subject: mailData.subject,
                htmlbodyLength: mailData.htmlbody.length
            });

            const response = await fetch(`https://${this.url}/v1.1/email`, {
                method: 'POST',
                headers: {
                    'Authorization': this.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mailData)
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${JSON.stringify(responseData)}`);
            }

            console.log(`Email sent successfully to ${to} for task: ${taskTitle}`);
            return responseData;
        } catch (error) {
            console.error(`Error sending ZeptoMail to ${to}:`, JSON.stringify(error));
            throw error;
        }
    }

    async sendBulkTaskAssignmentEmails(
        assignments: Array<{
            email: string;
            username: string;
            taskTitle: string;
            actionPlanName: string;
            priority: string;
            dueDate?: string;
        }>
    ) {
        const results = [];
        
        for (const assignment of assignments) {
            try {
                const result = await this.sendTaskAssignmentEmail(
                    assignment.email,
                    assignment.username,
                    assignment.taskTitle,
                    assignment.actionPlanName,
                    assignment.priority,
                    assignment.dueDate
                );
                results.push({ success: true, email: assignment.email, result });
            } catch (error) {
                console.error(`Failed to send email to ${assignment.email}:`, error);
                results.push({ success: false, email: assignment.email, error });
            }
        }
        
        return results;
    }

    private getPriorityIcon(priority: string): string {
        switch (priority.toLowerCase()) {
            case 'critical': return '🔴';
            case 'high': return '🟠';
            case 'medium': return '🟡';
            case 'low': return '🟢';
            default: return '🟡';
        }
    }
}

export default new ZeptoMailDirectService();
