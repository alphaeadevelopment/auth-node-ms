import express from 'express';
import bodyParser from 'body-parser';
import { loginHandler, validateHandler, keepAliveHandler } from './handlers/authenticationHandler';

const router = express.Router();

router.use(bodyParser.json());

router.post('/login', loginHandler);
router.post('/keep-alive', keepAliveHandler);
router.post('/validate-session', validateHandler);

export default router;
