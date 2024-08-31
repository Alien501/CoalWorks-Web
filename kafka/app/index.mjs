import express from "express";
import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'Kafka',
  brokers: ['172.16.8.247:9093'],
})

const admin = kafka.admin();
const app = express();
const PORT = process.env.PORT || 3002

app.use(express.json());

admin.connect();

app.post('/create-topic', async (req, res) => {
  const { topicName, numPartitions } = req.body;
  try {
    await admin.createTopics({
      topics: [
        {
          topic: topicName,
          numPartitions: numPartitions || 1,
        },
      ],
    });
    res.status(201).send(`Topic ${topicName} created successfully.`);
  } catch (error) {
    res.status(500).send(`Error creating topic: ${error.message}`);
  }
});

app.get('/list-topics', async (req, res) => {
  try {
    const topics = await admin.listTopics();
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).send(`Error listing topics: ${error.message}`);
  }
});

app.delete('/delete-topic', async (req, res) => {
  const { topicName } = req.body;

  try {
    await admin.deleteTopics({
      topics: [topicName],
    });
    res.status(200).send(`Topic ${topicName} deleted successfully.`);
  } catch (error) {
    res.status(500).send(`Error deleting topic: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});