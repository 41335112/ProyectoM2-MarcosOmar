const { pool } = require("./dbConnect");

const inicializateDb = async () => {

    await pool.query(`
        CREATE TABLE IF NOT EXISTS authors(
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(150) UNIQUE NOT NULL,
            bio TEXT,
            created_at TIMESTAMPTZ DEFAULT NOW()
        )
    `);

    const respuestaDB = await pool.query(`
        SELECT COUNT(*)::int AS total FROM authors
    `);

    if (respuestaDB.rows[0].total === 0) {
        await pool.query(`
            INSERT INTO authors(name, email) VALUES ($1, $2)
        `, ['Ana', 'ana@gmail.com']);
    }
};

module.exports = {
    inicializateDb
};