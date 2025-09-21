import { Kafka } from "kafkajs";

// This is an example consumer that your friend can use
const kafka = new Kafka({
  clientId: 'friend-consumer',
  brokers: ['localhost:9093', '192.168.137.156:9093'],
});

const consumer = kafka.consumer({ groupId: 'friend-group' });

const runFriendConsumer = async () => {
  try {
    await consumer.connect();
    console.log('Friend consumer connected to Kafka!');

    await consumer.subscribe({ topic: 'iot-data', fromBeginning: true });
    console.log('Friend consumer subscribed to iot-data topic!');

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log('=== FRIEND RECEIVED DATA ===');
        console.log('Topic:', topic);
        console.log('Partition:', partition);
        console.log('Offset:', message.offset);
        console.log('Key:', message.key?.toString());
        console.log('Timestamp:', message.timestamp);
        console.log('Data:', message.value.toString());
        console.log('============================');
        
        try {
          const parsedData = JSON.parse(message.value.toString());
          console.log('Parsed IoT Data:', parsedData);
        } catch (error) {
          console.error('Error parsing message:', error);
        }
      }
    });
  } catch (error) {
    console.error('Friend consumer error:', error);
  }
};

// Run the friend consumer
runFriendConsumer().catch(console.error);
