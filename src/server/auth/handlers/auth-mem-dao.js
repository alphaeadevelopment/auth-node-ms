import users from './users.json';

class AuthMemDao {
  constructor() {
    this.users = users;
  }
  add(d) {
    return Promise.resolve(d);
  }
  getById(id) {
    return Promise.resolve(users[id]);
  }
  getAll() {
    return Promise.resolve(users)
  }
  update(id, d) {
    return new Promise((res, rej) => {
      users[id] = d;
      res(d);
    });
  }
}

export default new AuthMemDao();
