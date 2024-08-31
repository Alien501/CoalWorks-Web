import { Kafka } from "kafkajs";
import { configDotenv } from "dotenv";

configDotenv();

const kafka = new Kafka({
  clientId: 'iot-service',
  brokers: ['kafka:9092'],
});

const consumer = kafka.consumer({groupId: 'iot-group'});

const run = async () => {
  await consumer.connect();
  console.log('Connected to kafka successfully!');

  await consumer.subscribe({ topic: 'iot-data', fromBeginning: 'true' });
  console.log('Subscribed to topic successfully!');

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const messageValue = message.value.toString();
      console.log({
        topic,
        partition,
        offset: message.offset,
        value: messageValue
      });
      try {
        const parsedMessage = JSON.parse(messageValue);
        console.log('Parsed message: ', parsedMessage);

      } catch (error) {
        console.error(error);
      }
    }
  })
}

export {
  run
}