const { DB_DIALECT, SCHEMA_NAME } = require('../../utils/constants');

const envArg = process.argv.find(x => x.startsWith('--env'));
const env = envArg ? envArg.split('=')[1] : 'development';
require('dotenv').config({ path: `../.env.${env}` });

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: DB_DIALECT,
    schema: SCHEMA_NAME,
    searchPath: SCHEMA_NAME,
    migrationStorageTableSchema: SCHEMA_NAME,
    dialectOptions: {
      prependSearchPath: true
    },
    define: {
      freezeTableName: true,
      underscored: true
    }
  },
  stage: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: DB_DIALECT,
    schema: SCHEMA_NAME,
    logging: false,
    searchPath: SCHEMA_NAME,
    migrationStorageTableSchema: SCHEMA_NAME,
    dialectOptions: {
      prependSearchPath: true
    },
    define: {
      freezeTableName: true,
      underscored: true
    }
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: DB_DIALECT,
    schema: SCHEMA_NAME,
    searchPath: SCHEMA_NAME,
    migrationStorageTableSchema: SCHEMA_NAME,
    dialectOptions: {
      prependSearchPath: true
    },
    define: {
      freezeTableName: true,
      underscored: true
    }
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: DB_DIALECT,
    schema: SCHEMA_NAME,
    logging: false,
    searchPath: SCHEMA_NAME,
    migrationStorageTableSchema: SCHEMA_NAME,
    dialectOptions: {
      prependSearchPath: true
    },
    define: {
      freezeTableName: true,
      underscored: true
    }
  }
};