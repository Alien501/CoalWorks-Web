import express from 'express';
import cors from 'cors';

import { configDotenv } from "dotenv";
import { handleError } from './utils/handleError.mjs';
import { logger } from './utils/logger.mjs';
import { user } from './routes/user.mjs';
import { role } from './routes/role.mjs';
import { shift } from './routes/shift.mjs';
import { tasks } from './routes/tasks.mjs';
import { incidents } from './routes/incident.mjs';

configDotenv();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);
app.use('/user',user);
app.use('/role', role);
app.use('/shift', shift);
app.use('/tasks', tasks)
app.use('/incidents', incidents)

app.use('/api/v1', (req, res) => {
  res.status(200).send({
    message: 'Working',
    error: null
  })
});

app.use(handleError);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
})