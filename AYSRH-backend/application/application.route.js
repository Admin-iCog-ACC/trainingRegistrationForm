import { Router } from 'express';
import { errorCatcher } from '../middleware/error.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';
import {
  httpCreateApplication,
  httpGetApplication,
} from './application.controller.js';

const router = Router();

router
  .route('/')
  .post(errorCatcher(isAuthenticated), errorCatcher(httpCreateApplication))
  .get(errorCatcher(isAuthenticated), errorCatcher(httpGetApplication));

export default router;
