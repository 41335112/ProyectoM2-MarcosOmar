const { Pool } = require("pg");

const { loadEnvFile } = require("node:process");
loadEnvFile('.env');


const pool = new Pool ({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});

module.exports = {
    pool
}
