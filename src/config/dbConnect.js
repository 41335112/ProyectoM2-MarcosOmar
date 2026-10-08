const { Pool } = require("pg");
const { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD, DB_MAX_CONNECTIONS, DB_IDLE_TIMEOUT, DB_CONNECTION_TIMEOUT, URL_DE_LA_BASE_DE_DATOS } = require("./envs");


const pool = new Pool ( URL_DE_LA_BASE_DE_DATOS ? { connectionString:DATABASE_URL}:{
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    max: DB_MAX_CONNECTIONS,
    idleTimeoutMillis: DB_IDLE_TIMEOUT,
    connectionTimeoutMillis: DB_CONNECTION_TIMEOUT
});

module.exports = {
    pool
}
