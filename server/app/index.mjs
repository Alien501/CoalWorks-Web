import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { configDotenv } from 'dotenv';
import { handleError } from './utils/handleError.mjs';
import { logger } from './utils/logger.mjs';
import { router } from './routes/router.mjs';

configDotenv();
const PORT = process.env.PORT || 3000;
const app = express();
// const httpServer = createServer(app);
// initializeWebsocket(httpServer)
app.use(express.json());
app.use(cors());
app.use(logger);
app.use('/api/v1', router);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`HTTP server is running on http://localhost:${PORT}`);
});
