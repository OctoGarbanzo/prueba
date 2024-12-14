import mysql from 'mysql2/promise';

let dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_asilo_ancianos',
  port: 3306
};

export const updateDbConfig = (newConfig) => {
  dbConfig = { ...newConfig };
};

export const getConnection = async () => {
  return await mysql.createConnection(dbConfig);
};

export const testConnection = async (testConfig) => {
  const connection = await mysql.createConnection(testConfig);
  await connection.end();
  return true;
};