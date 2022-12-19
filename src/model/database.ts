import mysql from "mysql2";

const dbConfig = require('../config/dbConfig.json');

const pool = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    port: dbConfig.port,
});

export const database = pool.promise();