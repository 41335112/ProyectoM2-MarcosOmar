const { pool } = require("../src/config/dbConnect");
const {errorHandler} = require("../middlewares/index");

const {
 getPostServer,
 getPostsIdServer,
 createPostsServer,
 updatePostsServer,
 deletePostServer
} = require("../servers/post.server");


const getPostsController = async (req, res, next) => {

  try{
    const resultado = await getPostServer();

    res.status(200).json({
     msg: 'Obteniendo todas las piblicaciones',
     data: resultado
    });
  }catch(error){
    next(error)
  }
 
}

const idPostsController = async (req, res, next) => {

 try{
    const { id } = req.params;
    const resultado = await getPostsIdServer(id);

    if(!resultado){
     return res.status(404).json({ error: 'Publicación no encontrada' });
    }

   res.status(200).json( resultado );

  }catch(error) {
   next(error)
  }

}

const createPostsController = async(req, res, next) => {
  
  try{
    const { title, content, author_id, published } = req.body;

   const crearPost = await createPostsServer({ title, content, author_id, published });

   res.status(201).json(crearPost);
  }catch(error){
    next(error)
  }
}

const updatePostsController = async(req, res, next) => {
  

  try{
    
    const { id } = req.params;
    const actualizar = await updatePostsServer(id, req.body);

    if (!actualizar) {
      return res.status(404).json({ 
        msg: 'Publicación no encontrada'
      });
    }

    res.status(200).json({ 
      msg:'Publicación actualizada correctamente', 
      post: actualizar
    });

  }catch{
    next(error)
  }
  
}

const deletePostsController = async(req, res, next) =>{
    
 try{

   const { id } = req.params;
   const eliminar =  await deletePostServer(id);

    if (!eliminar) {
     return res.status(404).json({ 
       msg: 'Publicación no encontrada'
      });
    }

    res.status(200).json({
      msg:'Publicación eliminada correctamente',
      post: eliminar
    });

  }catch(error){
    next(error)
  }

}

module.exports = {
 getPostsController,
 idPostsController,
 createPostsController,
 updatePostsController,
 deletePostsController
}

try{

}catch(error){
  next(error)
}