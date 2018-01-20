import validateCredentials from './validate-credentials';
import verifyJwtToken from '../jwt/verifyJwtToken';
import createJwtToken from '../jwt/createJwtToken';

export const loginHandler = (req, res) => {
  validateCredentials(req.body)
    .then((user) => {
      if (user) {
        createJwtToken(user).then(token => res.status(200).send({
          token,
          user,
          statusCode: 200,
        }));
      }
      else {
        res.status(200).send({
          statusCode: 403,
          message: 'Invalid username/password',
        });
      }
    })
    .catch(err => res.status(500).send(err));
};
export const validateHandler = (req, res) => {
  const { body } = req;
  const { token } = body;
  verifyJwtToken(token).then(d => res.status(200).send(d));
};

export const keepAliveHandler = (req, res) => {
  const { body } = req;
  const { token } = body;
  verifyJwtToken(token).then((payload) => {
    createJwtToken(payload.user).then(newToken => res.send({
      statusCode: 200,
      token: newToken,
    }));
  });
};
