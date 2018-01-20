import express from 'express';
import bodyParser from 'body-parser';
import { loginHandler, keepAliveHandler, validateHandler } from './authenticationHandler';

const router = express.Router();
router.use(bodyParser.json());

export default router;
