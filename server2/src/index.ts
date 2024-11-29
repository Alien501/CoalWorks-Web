import express, { Request, Response } from 'express';
import morgan from "morgan";
import { handleError } from './middlewares/handleError';
import { router } from './router/router';
import cors from 'cors';

const app = express();

const PORT: number = 3000;

app.use(cors())
app.use(express.json());

app.use(morgan('tiny'))
app.use('/api/v1', router);

app.use(handleError);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});