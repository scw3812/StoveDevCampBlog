require('dotenv').config();

module.exports = {
  "development": {
    username: "root",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "dev",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: 'Asia/Seoul',
  },
  "test": {
    username: "root",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "test",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: 'Asia/Seoul',
  },
  "production": {
    username: "root",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "prod",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: 'Asia/Seoul',
    logging: false,
  }
};
