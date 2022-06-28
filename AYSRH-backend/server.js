import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDatabase from './_helpers/db.js';

import authRoutes from './users/user.route.js';
import applicationRoutes from './application/application.route.js';

import { errorHandler, notFound } from './middleware/error.js';

dotenv.config();

connectDatabase();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/application', applicationRoutes);

app.use(notFound);
app.use(errorHandler);

// start server
const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
