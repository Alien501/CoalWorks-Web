import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { configDotenv } from 'dotenv';
import { handleError } from './utils/handleError.mjs';
import { logger } from './utils/logger.mjs';
import { run } from './kafka/kafka.mjs';
import { router } from './routes/router.mjs';
import { initializeWebsocket } from './routes/webSocket.mjs';

configDotenv();

const PORT = process.env.PORT || 4444;
const app = express();
const httpServer = createServer(app);

initializeWebsocket(httpServer);

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(logger);

await run();

app.use('/api/v1', router);
app.use('/api/v1', (req, res) => {
  res.status(200).send({
    message: 'Working',
    error: null,
  });
});

app.use(handleError);

httpServer.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
