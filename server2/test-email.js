// Simple test script for ZeptoMail functionality
// Run with: node test-email.js

const { SendMailClient } = require('zeptomail');
require('dotenv').config();

async function testEmail() {
    try {
        const url = process.env.ZEPTOMAIL_URL || 'api.zeptomail.in';
        const token = process.env.ZEPTOMAIL_TOKEN || '';
        
        if (!token) {
            console.error('❌ ZEPTOMAIL_TOKEN not found in environment variables');
            console.log('Please add ZEPTOMAIL_TOKEN to your .env file');
            return;
        }
        
        console.log('🚀 Initializing ZeptoMail client...');
        const client = new SendMailClient({ url, token });
        
        console.log('📧 Sending test email...');
        const response = await client.sendMail({
            from: {
                address: process.env.ZEPTOMAIL_FROM_EMAIL || 'noreply@coalworks.com',
                name: 'CoalWorks Test'
            },
            to: [
                {
                    email_address: {
                        address: 'cvignesh404@gmail.com', // Replace with your test email
                        name: 'Test User'
                    }
                }
            ],
            subject: '🧪 CoalWorks Email Test',
            htmlbody: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">✅ ZeptoMail Integration Test</h2>
                    <p>This is a test email to verify that the ZeptoMail integration is working correctly.</p>
                    <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3>Test Details:</h3>
                        <ul>
                            <li><strong>Service:</strong> ZeptoMail</li>
                            <li><strong>Status:</strong> ✅ Working</li>
                            <li><strong>Time:</strong> ${new Date().toLocaleString()}</li>
                        </ul>
                    </div>
                    <p style="color: #666; font-size: 14px;">
                        If you received this email, the CoalWorks email system is working correctly!
                    </p>
                </div>
            `
        });
        
        console.log('✅ Test email sent successfully!');
        console.log('Response:', response);
        
    } catch (error) {
        console.error('❌ Error sending test email:', error);
        console.log('\nTroubleshooting tips:');
        console.log('1. Check your ZEPTOMAIL_TOKEN in .env file');
        console.log('2. Verify your ZeptoMail account is active');
        console.log('3. Ensure the from email is verified in ZeptoMail');
        console.log('4. Check your internet connection');
    }
}

// Run the test
testEmail();
