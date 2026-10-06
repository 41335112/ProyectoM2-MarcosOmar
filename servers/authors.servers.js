const { response } = require("express");
const { authors, pool } = require("../src/config/dbConnect");

const getAuthorsServe = async () => {

  const responseDb = await pool.query('SELECT * FROM authors ORDER BY id ASC');
 
  return responseDb.rows

}

const getAuthorIdServer = async(id) => {
    
  const resultado = await db.query('SELECT * FROM authors WHERE id = $1', [id]);
  return resultado.rows[0]
}

const createAuthorServer = async(datosAutor) => {
  
  const result = await db.query(
    'INSERT INTO authors (name, email, bio) VALUES ($1, $2, $3) RETURNING *',
    [nombre, gmail, bio]
  );
  
  return result.rows;
}

const updateAuthorServer = async(id, {nombre, gmail, bio}) => {

  const resultado = await db.query(
    `UPDATE authors 
     SET 
       name = COALESCE($1, name), 
       email = COALESCE($2, email), 
       bio = COALESCE($3, bio) 
     WHERE id = $4 
     RETURNING *`,
    [nombre, gmail, bio, id]
  );

  return resultado.rows
}

const deleteAuthorServer = async(id) => {
 
  const resultado = await db.query('DELETE FROM authors WHERE id = $1 RETURNING *', [id]);

  return resultado.rows[0]
}

module.exports = {
 getAuthorsServe,
 getAuthorIdServer,
 createAuthorServer,
 updateAuthorServer,
 deleteAuthorServer
}