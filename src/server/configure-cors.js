import cors from 'cors';

const config = {
  origin: ['http://localhost:3000'],
  methods: '*',
}
export default (app) => {
  app.use(cors(config));
}
