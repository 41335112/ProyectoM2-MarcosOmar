const {
 getAuthorsServe, 
 getAuthorIdServer, 
 createAuthorServer, 
 updateAuthorServer,
 deleteAuthorServer
} = require("../servers/authors.servers");


function getAuthorsControllers(req, res){
  
  const resultado = getAuthorsServe();
 
  res.status(200).json({
    msg: 'todo ok en /',
    data: resultado
  });
}

function getAuthorIdControllers(req, res){
  
  const { id } = req.params;  
  const resultado = getAuthorIdServer(id);

  res.status(200).json({ 
    msg: `Obtenido autor con ID ${id}`
  })
}

function createAuthorControllers(req, res){
  
  const datosAutor = req.body;  
  const crear = createAuthorServer(datosAutor);

  res.status(201).json({
    msg: 'Autor creado exitosamente',
    data: crear
  });

}

function updateAuthorControllers(req, res){
 
  const { id } = req.params;
  const datosAutor = req.body;
  const actualizar = updateAuthorServer(id, datosAutor);

  if (!actualizar) {
    return res.status(404).json({ 
        msg: `El autor con ID ${id} no existe`
    });
  }

  res.status(200).json({
    msg: `Autor con ID ${id} actualizado correctamente`,
    data: actualizar
  });

}

function deleteAuthorControllers(req, res){
 
  const { id } = req.params;
  const eliminar = deleteAuthorServer(id);

  if (!eliminar) {
    return res.status(404).json({
        msg: `El autor con ID ${id} no existe`
    });
  }

  res.status(200).json({
    msg: `Autor con ID ${id} fue eliminado`,
    data: eliminar
  });
}

module.exports = {
    getAuthorsControllers,
    getAuthorIdControllers,
    createAuthorControllers,
    updateAuthorControllers,
    deleteAuthorControllers
}