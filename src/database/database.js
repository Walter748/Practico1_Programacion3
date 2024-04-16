import mysql from "promise-mysql";
import config from "./../config";
import { createPool } from "mysql2/promise";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

const connections = createPool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};
