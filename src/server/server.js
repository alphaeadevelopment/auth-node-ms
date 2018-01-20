import express from 'express';
import bodyParser from 'body-parser';
import configureCors from './configure-cors';
import config from '@alphaeadev/config-client';

config.init('http://config-server-test.alphaea.uk', 'auth-node-ms', process.env.ENV)
  .then(() => {
    const authRouter = require('./auth').default;
    const port = Number(config.getOr('port', 3001));
    const app = express();
    configureCors(app);
    app.use('/auth', authRouter);
    app.get('/ping', (req, res) => res.status(200).send());
    app.listen(port, () => {
      console.log('Listening on %s', port)
    });
  });
