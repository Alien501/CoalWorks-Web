import { Kafka } from "kafkajs";
import { configDotenv } from "dotenv";
import { emitSensorData } from "../routes/webSocket.mjs";
import pkg from 'pg';
import { insertSensorData } from "../queries/insert.mjs";
configDotenv();

const kafka = new Kafka({
  clientId: 'iot-service',
  brokers: ['172.16.8.247:9093'],
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
        emitSensorData(parsedMessage)
        insertSensorData(parsedMessage)
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