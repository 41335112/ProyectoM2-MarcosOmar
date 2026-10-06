const { pool } = require("../src/config/dbConnect");

const {
 getPostServer,
 getPostsIdServer,
 createPostsServer,
 updatePostsServer,
 deletePostServer
} = require("../servers/post.server");

const getPostsController = async (req, res) => {

 const resultado = await getPostServer();

 res.status(200).json({
    msg: 'Obteniendo todas las piblicaciones',
    data: resultado
  });

}

const idPostsController = async (req, res) => {

 const { id } = request.params;
 const resultado = await getPostsIdServer(id);

 if(!resultado){
  return res.status(404).json({ error: 'Publicación no encontrada' });
 }

 res.status(200).json( resultado );
}

const createPostsController = async(req, res) => {
  
  const { title, content, author_id, published } = req.body;

  if (!title || !content || !author_id) {
    
    return res.status(400).json({ 
     msg: 'Los campos title, content y author_id son obligatorios' 
     });
  }

  const crearPost = await createPostsServer({ title, content, author_id, published });

  res.status(201).json(crearPost);

}

const updatePostsController = async(req, res) => {
  
  const { id } = req.params;
  const actualizar = await updatePostsServer(id);

  if (!actualizar) {
    return res.status(404).json({ 
      msg: 'Publicación no encontrada'
    });
  }

  res.status(200).json({ 
   msg:'Publicación eliminada correctamente', post: actualizar
  });

}

const deletePostsController = async(req, res) =>{
    
  const { id } = req.params;
  const eliminar =  await deletePostServer(id);

  if (!eliminar) {
    return res.status(404).json({ 
      msg: 'Publicación no encontrada'
     });
  }

  res.status(200).json({
    msg:'Publicación eliminada correctamente', post: eliminar
  });

}

module.exports = {
 getPostsController,
 idPostsController,
 createPostsController,
 updatePostsController,
 deletePostsController
}