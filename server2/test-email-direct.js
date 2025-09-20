// Direct ZeptoMail test using fetch API
require('dotenv').config();

async function testEmailDirect() {
    try {
        const token = process.env.ZEPTOMAIL_TOKEN || '';
        const url = process.env.ZEPTOMAIL_URL || 'api.zeptomail.in';
        
        if (!token) {
            console.error('❌ ZEPTOMAIL_TOKEN not found in environment variables');
            console.log('Please add ZEPTOMAIL_TOKEN to your .env file');
            return;
        }
        
        console.log('🚀 Testing ZeptoMail with direct fetch API...');
        console.log('📧 Sending test email...');
        
        const mailData = {
            from: {
                address: process.env.ZEPTOMAIL_FROM_EMAIL || 'no-reply@alien501.in',
                name: 'CoalWorks Test'
            },
            to: [
                {
                    email_address: {
                        address: 'cvignesh404@gmail.com',
                        name: 'Vignesh'
                    }
                }
            ],
            subject: '🧪 CoalWorks Email Test (Direct)',
            htmlbody: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">✅ ZeptoMail Direct Integration Test</h2>
                    <p>This is a test email to verify that the ZeptoMail direct integration is working correctly.</p>
                    <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3>Test Details:</h3>
                        <ul>
                            <li><strong>Service:</strong> ZeptoMail Direct API</li>
                            <li><strong>Status:</strong> ✅ Working</li>
                            <li><strong>Time:</strong> ${new Date().toLocaleString()}</li>
                        </ul>
                    </div>
                    <p style="color: #666; font-size: 14px;">
                        If you received this email, the CoalWorks email system is working correctly!
                    </p>
                </div>
            `
        };
        
        const response = await fetch(`https://${url}/v1.1/email`, {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mailData)
        });
        
        const responseData = await response.json();
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${JSON.stringify(responseData)}`);
        }
        
        console.log('✅ Test email sent successfully!');
        console.log('Response:', responseData);
        
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
testEmailDirect();
