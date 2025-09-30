const axios = require('axios');

async function testActionPlansEndpoint() {
    try {
        console.log('Testing action plans endpoint...');
        
        const response = await axios.get('http://localhost:3000/api/v1/payload/action-plans');
        
        console.log('✅ Action plans response:', response.data);
        console.log(`Found ${response.data.data.length} action plans`);
        
        if (response.data.data.length > 0) {
            console.log('Action plans:');
            response.data.data.forEach((plan, index) => {
                console.log(`${index + 1}. ${plan.name} (${plan.status}) - Priority: ${plan.priority}`);
            });
        } else {
            console.log('❌ No action plans found');
        }
        
    } catch (error) {
        console.error('❌ Error:', error.response?.data || error.message);
    }
}

// Run the test
testActionPlansEndpoint();
