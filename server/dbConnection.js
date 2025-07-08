// dbConnection.js
import mysql from 'mysql2/promise';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'smith',
  database: 'mydb',
});

export default db;