import express from 'express';
import cors from 'cors';
import { configDotenv } from "dotenv";
import { Kafka } from "kafkajs";


import { handleError } from '../utils/handleError.mjs';
import { logger } from '../utils/logger.mjs';

configDotenv();

const PORT = process.env.PORT;
const app = express();

const kafka = new Kafka({
  clientId: 'iot-producer',
  brokers: ['172.16.8.247:9093']
});
const producer = kafka.producer();
const connectToKafka = async () => {
  try {
    await producer.connect();
    console.log('Connnected to producer successfully!');
  } catch (error) {
    console.error('Failed to connect to kafka', error);
  }
}
connectToKafka();


// Middlewares
app.use(express.json());
app.use(cors());
app.use(logger);

app.use('/api/v1', (req, res) => {
  res.status(200).send({
    message: 'Working',
    error: null
  })
});


app.post('/produce', async (req, res) => {
  const bodyData = req.body;
  // console.log(req.body)
  if(!bodyData)
    return res.status(400).send({
      message: 'Invalid Body'
    })

  try {
    const producerRes = await producer.send({
      topic: 'iot-data',
      messages: [
        {value: JSON.stringify(bodyData)}
      ]
    })
    console.log(producerRes);
    res.status(200).send({
      message: 'Message produced successfully',
      status: 200
    });
  } catch (error) {
    console.error('Error producing message:', error);
    res.status(500).send({
      error: 'Failed to produce message',
      details: error.message
    });
  }
})

app.use(handleError);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
})