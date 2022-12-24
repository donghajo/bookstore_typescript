import mysql from "mysql2";
const dbConfig = require('../config/dbConfig.json');

const pool = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    port: dbConfig.port,
});

pool.getConnection(function (err, connenction) {
    if (err) {
        console.log("DB connect fail : ", err);
    }
    console.log("DB connect success");
    connenction.release();
});



export const database = pool.promise();