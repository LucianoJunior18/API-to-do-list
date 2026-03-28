require('dotenv').config();

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './src/database/database.sqlite'
  },
  test: {
    dialect: 'sqlite',
    storage: './src/database/database.sqlite'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};