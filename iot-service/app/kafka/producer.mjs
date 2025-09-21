import { Kafka } from "kafkajs";
import { configDotenv } from "dotenv";

configDotenv();

const kafka = new Kafka({
  clientId: 'iot-service-producer',
  brokers: ['localhost:9093', '192.168.137.156:9093'],
});

let producer = null;

const initializeProducer = async () => {
  try {
    producer = kafka.producer();
    await producer.connect();
    console.log('Kafka producer connected successfully!');
  } catch (error) {
    console.error('Failed to connect Kafka producer:', error);
  }
};

const publishSensorData = async (data) => {
  try {
    if (!producer) {
      await initializeProducer();
    }

    const message = {
      topic: 'iot-data',
      messages: [
        {
          key: `sensor-${Date.now()}`, // Unique key for each message
          value: JSON.stringify(data),
          timestamp: Date.now().toString()
        }
      ]
    };

    const result = await producer.send(message);
    console.log('Message published to Kafka:', result);
    return result;
  } catch (error) {
    console.error('Failed to publish message to Kafka:', error);
    throw error;
  }
};

const disconnectProducer = async () => {
  if (producer) {
    await producer.disconnect();
    console.log('Kafka producer disconnected');
  }
};

export {
  initializeProducer,
  publishSensorData,
  disconnectProducer
};
