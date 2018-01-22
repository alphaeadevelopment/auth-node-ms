import jwt from 'jsonwebtoken';
import { privateKeyFile } from '../crypto';

const expiry = '5m';

const passphrase = process.env.RSA_PASSPHRASE;
export default user => (
  new Promise((res, rej) => {
    jwt.sign(
      { user },
      { key: privateKeyFile, passphrase },
      { algorithm: 'RS256', expiresIn: expiry },
      (err, token) => {
        if (err) {
          rej(err);
        }
        else {
          res(token);
        }
      },
    );
  })
);
