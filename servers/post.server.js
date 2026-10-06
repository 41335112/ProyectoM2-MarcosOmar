const { posts } = require("../db")

function getPostServer() {

 return posts

}

function getPostsIdServer(id){
 
  const autorEncontrado = posts.find((autor) => autor.id === Number(id));
  return autorEncontrado
}

function createPostsServer(datosPosts){
    
 const nuevoPost = {
  id: posts.length + 1,
    ...datosPosts
 };
  
  posts.push(datosPosts);
  return nuevoPost;

}

function updatePostsServer(id, datosActualizados){

  const i = posts.findIndex((posts) => posts.id === Number(id));

  if (i === -1) {
    return null;
  }

  posts[i] = {
    ...posts[i],
    ...datosActualizados
  };

  return posts[i]

}

function deletePostServer(id){
    
  const i = posts.findIndex((posts) => posts.id === Number(id));

  if ( i === -1) {
    return null;
  }
   
  const [postsEliminado] = posts.splice( i, 1);
  return postsEliminado;
}

module.exports = {
    getPostServer,
    getPostsIdServer,
    createPostsServer,
    updatePostsServer,
    deletePostServer
}