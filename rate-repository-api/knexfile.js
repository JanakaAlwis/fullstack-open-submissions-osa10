import dotenv from 'dotenv';
dotenv.config();

const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
    useNullAsDefault: true,
  },
  // add other environments here...
};

export default config;