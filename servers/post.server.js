const { posts } = require("../src/config/dbConnect");

const getPostServer = async () => {
  const query = `
    SELECT posts.*, authors.nombre AS author_nombre 
    FROM posts 
    JOIN authors ON posts.author_id = authors.id 
    ORDER BY posts.id ASC
  `;
  const result = await db.query(query);

  return result.rows;
}

const getPostsIdServer = async(id) => {
  const query = `
    SELECT posts.*, authors.nombre AS author_nombre 
    FROM posts 
    JOIN authors ON posts.author_id = authors.id 
    WHERE posts.id = $1
  `;
  const result = await db.query(query, [id]);
  return result.rows[0];
};
 

const createPostsServer = async({ title, content, author_id, published = false }) => {
  const query = `
    INSERT INTO posts (title, content, author_id, published) 
    VALUES ($1, $2, $3, $4) 
    RETURNING *
  `;

  const result = await db.query(query, [title, content, author_id, published]);
  
  return result.rows[0];

}

const updatePostsServer = async(id, { title, content, published }) =>{

  const query = `
    UPDATE posts 
    SET title = COALESCE($1, title), 
        content = COALESCE($2, content), 
        published = COALESCE($3, published) 
    WHERE id = $4 
    RETURNING *
  `;

  const result = await db.query(query, [title, content, published, id]);
  
  
  return result.rows[0];
}

const deletePostServer = async(id) =>{
 
  const query = 'DELETE FROM posts WHERE id = $1 RETURNING *';
  const result = await db.query(query, [id]);

  
  return result.rows[0];
}

module.exports = {
    getPostServer,
    getPostsIdServer,
    createPostsServer,
    updatePostsServer,
    deletePostServer
}