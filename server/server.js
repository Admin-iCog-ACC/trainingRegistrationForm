import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDatabase from './db.js';
import { errorHandler, notFound } from './error.js';
import registrationRoute from './registration.route.js'

dotenv.config();

connectDatabase();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/',registrationRoute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));