require('dotenv').config();

const { URL } = require('url');

let productionConfig = {
  dialect: 'postgres',
  dialectOptions: {
    ssl: false
  }
};

if (process.env.DATABASE_URL) {
  const dbUrl = new URL(process.env.DATABASE_URL);
  productionConfig = {
    ...productionConfig,
    username: dbUrl.username,
    password: dbUrl.password,
    database: dbUrl.pathname.slice(1),
    host: dbUrl.hostname,
    port: dbUrl.port,
  };
}

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './src/database/database.sqlite'
  },
  test: {
    dialect: 'sqlite',
    storage: './src/database/database.sqlite'
  },
  production: productionConfig
};