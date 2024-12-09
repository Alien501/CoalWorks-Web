import express, { Request, Response } from 'express';
import morgan from 'morgan';
import { handleError } from './middlewares/handleError';
import { router } from './router/router';
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import { swaggerDocs } from './swagger';

const app = express();

const PORT: number = 3000;

app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:8000', "http://localhost:5174"],
    credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(morgan('tiny'));

/**
 * @swagger
 * /api/v1:
 *   get:
 *     summary: API base path
 *     description: The common API base path for all application routes.
 *     responses:
 *       200:
 *         description: Returns a success message.
 */
app.use('/api/v1', router);

app.use(handleError);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});