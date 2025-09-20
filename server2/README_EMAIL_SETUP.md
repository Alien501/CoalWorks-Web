# Email Integration Setup Guide

This guide explains how to set up and use the ZeptoMail integration for sending task assignment emails in the CoalWorks system.

## Prerequisites

1. ZeptoMail account and API token
2. Environment variables configured
3. ZeptoMail package installed (already included in package.json)

### Getting ZeptoMail Token

1. Sign up for ZeptoMail at https://www.zoho.com/zeptomail/
2. Go to your ZeptoMail dashboard
3. Navigate to Settings > API Keys
4. Generate a new API key
5. Copy the encrypted API key (it should start with "Zoho-enczapikey")
6. Add it to your environment variables

## Environment Variables

Add the following variables to your `.env` file:

```env
# ZeptoMail Configuration
ZEPTOMAIL_TOKEN="Zoho-enczapikey your-encrypted-api-key"
ZEPTOMAIL_URL="api.zeptomail.in"
ZEPTOMAIL_FROM_EMAIL="noreply@yourdomain.com"
```

## How It Works

### 1. Action Plan Creation
- Users create action plans with SMPs and tasks
- Tasks can be assigned to users based on their roles
- Role-based user selection is available in the dropdown

### 2. Action Plan Activation
- When an action plan is activated, emails are automatically sent to all assigned users
- Each user receives a personalized email with their specific task details
- Email includes task title, action plan name, priority, and due date

### 3. Email Content
- Professional HTML email template
- Priority-based color coding and icons
- Task details and action items
- Company branding and styling

## API Endpoints

### Activate Action Plan (with email sending)
```
POST /api/v1/action-plans/:id/activate
```
This endpoint activates an action plan and automatically sends emails to all assigned users.

### Send Individual Task Notification
```
POST /api/v1/action-plans/send-task-notification
```
Body:
```json
{
  "to": "user@example.com",
  "username": "John Doe",
  "taskTitle": "Safety Inspection",
  "actionPlanName": "Emergency Protocol",
  "priority": "high",
  "dueDate": "2024-01-15T10:00:00Z"
}
```

## Dashboard Integration

The dashboard now includes:
- Priority mail cards showing email statistics
- Action plan alert cards with email execution functionality
- Real-time email sending status

## Testing

### Quick Test with Test Script

1. Update the test email address in `test-email.js` (line 32)
2. Run the test script:
   ```bash
   cd server2
   node test-email.js
   ```

### Full Integration Test

1. Create an action plan with tasks assigned to users
2. Activate the action plan
3. Check that emails are sent to assigned users
4. Verify email content and formatting

### API Test Endpoint

You can also test via the API endpoint:
```bash
curl -X POST http://localhost:3000/api/v1/action-plans/test-email \
  -H "Content-Type: application/json" \
  -d '{"to": "your-email@example.com", "username": "Test User"}'
```

## Troubleshooting

### Common Issues

1. **TM_3601 "This URL does not exist" error**: 
   - Ensure ZEPTOMAIL_URL is set to `api.zeptomail.in` (without trailing slash)
   - Check that your ZeptoMail account is active and verified

2. **Emails not sending**: 
   - Verify ZEPTOMAIL_TOKEN is correct and starts with "Zoho-enczapikey"
   - Check that the from email address is verified in your ZeptoMail account
   - Ensure your ZeptoMail account has sufficient credits

3. **Invalid email addresses**: 
   - Ensure user emails are valid in the database
   - Check that recipient email addresses are properly formatted

4. **Template errors**: 
   - Verify HTML template syntax in zeptomailService.ts
   - Check for any special characters that might break the email content

### Logs

Check server logs for email sending results and any errors:
```
Email sending results: [array of results]
```

## Security Notes

- ZeptoMail tokens should be kept secure
- Email addresses are validated before sending
- Failed emails don't prevent action plan activation
- All email sending is logged for audit purposes
