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

            const htmlContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Task Assignment - ${actionPlanName}</title>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                        .task-card { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                        .priority-badge { display: inline-block; padding: 8px 16px; border-radius: 20px; color: white; font-weight: bold; text-transform: uppercase; }
                        .priority-critical { background: #e74c3c; }
                        .priority-high { background: #f39c12; }
                        .priority-medium { background: #f1c40f; color: #333; }
                        .priority-low { background: #27ae60; }
                        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
                        .icon { font-size: 24px; margin-right: 10px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>🚨 Task Assignment Notification</h1>
                            <p>CoalWorks Safety Management System</p>
                        </div>
                        <div class="content">
                            <h2>Hello ${username},</h2>
                            <p>You have been assigned a new task as part of an action plan. Please review the details below and take necessary action.</p>
                            
                            <div class="task-card">
                                <h3>📋 Task Details</h3>
                                <p><strong>Task:</strong> ${taskTitle}</p>
                                <p><strong>Action Plan:</strong> ${actionPlanName}</p>
                                <p><strong>Priority:</strong> <span class="priority-badge priority-${priority}">${priorityIcon} ${priority.toUpperCase()}</span></p>
                                ${dueDate ? `<p><strong>Due Date:</strong> ${new Date(dueDate).toLocaleString()}</p>` : ''}
                            </div>

                            <div class="task-card">
                                <h3>📝 Action Required</h3>
                                <ul>
                                    <li>Review the task requirements carefully</li>
                                    <li>Coordinate with your team if needed</li>
                                    <li>Complete the task within the specified timeframe</li>
                                    <li>Update the task status in the system</li>
                                </ul>
                            </div>

                            <div class="task-card">
                                <h3>🔗 Next Steps</h3>
                                <p>Please log into the CoalWorks system to:</p>
                                <ul>
                                    <li>View complete task details</li>
                                    <li>Access related documentation</li>
                                    <li>Update task progress</li>
                                    <li>Report any issues or concerns</li>
                                </ul>
                            </div>

                            <div class="footer">
                                <p>This is an automated notification from CoalWorks Safety Management System.</p>
                                <p>If you have any questions, please contact your supervisor or the safety team.</p>
                            </div>
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
