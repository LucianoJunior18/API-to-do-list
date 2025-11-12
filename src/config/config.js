require('dotenv').config(); 

module.exports = {
  development: {
    dialect: process.env.DB_DIALECT || 'sqlite',
    storage: process.env.DB_STORAGE || './src/database/database.sqlite'
  },
  test: {
    dialect: 'sqlite',
    storage: './src/database/database.sqlite'
  },
  production: {
    dialect: 'sqlite',
    storage: './src/database/database.sqlite'
  }
};
