import express from 'express';
import bodyParser from 'body-parser';
import configureCors from './configure-cors';
import { loadConfig } from '@alphaeadev/config-client';

loadConfig('auth-node-ms', process.env.ENV)
  .then((config) => {
    const authRouter = require('./auth').default;
    const port = Number(config.port || 3000);
    const app = express();
    configureCors(app);
    app.use('/auth', authRouter);
    app.get('/ping', (req, res) => res.status(200).send());
    app.listen(port, () => {
      console.log('Listening on %s', port)
    });
  })
  .catch((e) => {
    console.error('Failed to contact config server');
    console.error(e.message);
    process.exit(1);
  });
