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
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: false
    }
  }
};