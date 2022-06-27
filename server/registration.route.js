import { Router } from 'express';
import { errorCatcher } from './error.js';
import {
  httpRegisterUser,
} from './registration.controller.js';

const router = Router();

router.route('/register').post(errorCatcher(httpRegisterUser));

export default router;