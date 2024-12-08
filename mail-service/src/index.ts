import express from 'express'
import { config } from "dotenv";
import morgan from 'morgan';
import { handleError } from './middleware/handleError';
import { router } from './router/router';
config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('short'));
app.get('/api/v1/mail', router);

app.use(handleError);

app.listen(PORT, () => {
    console.log(`Mail Service running at http://localhost:${PORT}`)
})