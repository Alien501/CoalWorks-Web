import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { handleError } from './middlewares/handleError';
import { configDotenv } from 'dotenv';
import { serverProxy } from './proxy/proxy';

configDotenv();

const PORT = process.env.GATEWAY_PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan('tiny'));

app.use('/data', serverProxy);

app.use(handleError);


app.listen(PORT, () => {
    console.log(`API Gateway running on: http://localhost:${PORT}`)
})