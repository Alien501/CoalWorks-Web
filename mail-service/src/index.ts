import express from 'express'
import { config } from "dotenv";
import morgan from 'morgan';
import { handleError } from './middleware/handleError';
import router from './router/router';
import cors from 'cors';

config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json())
app.use(morgan('short'));
app.use('/api/v1/mail', router);

app.use(handleError);

app.listen(PORT, () => {
    console.log(`Mail Service running at http://localhost:${PORT}`)
})