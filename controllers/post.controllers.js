const { posts } = require("../db");

const {
 getPostServer,
 getPostsIdServer,
 createPostsServer,
 updatePostsServer,
 deletePostServer
} = require("../servers/post.server");

const getPostsController = (req, res) => {

 const resultado = getPostServer();

 res.status(200).json({
    msg: 'Obteniendo todas las piblicaciones',
    data: resultado
  });

}

const idPostsController = (req, res) => {

 const { id } = request.params
 const resultado = getPostsIdServer(id);

 res.status(200).json({ 
    msg: `Obtenido posts con ID ${id}`
  })
}

const createPostsController = (req, res) => {
  
  const datosPosts = req.body;  
  const crear = createPostsServer(datosPosts);

  res.status(201).json({
    msg: 'Posts creado exitosamente',
    data: crear
  });

}

const updatePostsController = (req, res) => {
  
  const { id } = req.params;
  const datosPosts = req.body;
  const actualizar = updatePostsServer(id, datosPosts);

  if (!actualizar) {
    return res.status(404).json({ 
        msg: `El posts con ID ${id} no existe`
    });
  }

  res.status(200).json({
    msg: `El post con ID ${id} actualizado correctamente`,
    data: actualizar
  });

}

const deletePostsController = (req, res) =>{
    
  const { id } = req.params;
  const eliminar = deletePostServer(id);

  if (!eliminar) {
    return res.status(404).json({
        msg: `El Posts con ID ${id} no existe`
    });
  }

  res.status(200).json({
    msg: `Posts con ID ${id} fue eliminado`,
    data: eliminar
  });

}

module.exports = {
 getPostsController,
 idPostsController,
 createPostsController,
 updatePostsController,
 deletePostsController
}