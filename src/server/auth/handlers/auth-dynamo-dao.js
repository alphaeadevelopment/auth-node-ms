import DynamoDbDataAccess from '@alphaeadev/dynamo-db-dao';

const schema = {
  username: 'S',
  password: 'S',
  surname: 'S',
  firstname: 'S',
}
class AuthenticationDao extends DynamoDbDataAccess {
  constructor() {
    super('Users', schema, 'username');
  }
}

export default new AuthenticationDao();
