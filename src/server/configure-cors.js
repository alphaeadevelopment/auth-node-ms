import cors from 'cors';

const corsAllowedOriginsRegex = /https?:\/\/(.*\.alphaea\.uk|localhost)(:\d{2,4})?/

const config = {
  methods: '*',
  origin: (o, callback) => {
    const allowed = o.match(corsAllowedOriginsRegex)
    callback(!allowed && `${o} not allowed`, allowed);
  },
}
export default (app) => {
  app.use(cors(config));
}
