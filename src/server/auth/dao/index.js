const dao = (process.env.ENV === 'local') ? require('./auth-mem-dao').default : require('./auth-dynamo-dao').default;
export default dao;
