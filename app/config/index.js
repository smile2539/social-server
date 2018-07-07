const app = {
  db: {
    host: "ds129166.mlab.com",
    port: 29166,
    name: "server",
    username: "admin",
    password: "yupaporn2539"
  },
  jwt: {
    APP_SECRET: "ILOVEYOU",
    EXPIRE_IN: "7d"
  }
};

export const database = app.db;
export default app;
