import { digest } from '@alphaeadev/crypto';
import omit from 'lodash/omit';
import { decrypt } from '../crypto';
import dao from './auth-dynamo-dao';

export default ({ username, encryptedNonce, noncedPasswordDigest }) => {
  if (!username || !encryptedNonce || !noncedPasswordDigest) return null;
  return new Promise((res, rej) => {
    dao.getById(username)
      .then((user) => {
        const noncedStoredPassword = digest(user.password || '', decrypt(encryptedNonce));

        if (noncedStoredPassword === noncedPasswordDigest) {
          res({
            ...omit(user, 'password'),
            username,
          });
        }
        else res();
      })
      .catch((err) => rej(err));
  });
};
