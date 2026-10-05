const {
 getAuthorsServe, 
 getAuthorIdServer, 
 createAuthorServer, 
 updateAuthorServer,
 deleteAuthorServer
} = require("../servers/authors.servers");


function getAuthorsControllers(req, res){
  
  const resultado = getAuthorsServe();
 
  req.status(201).json({
    msg: 'todo ok en /',
    data: resultado
  });
}

function getAuthorIdControllers(req, res){
    
  const resultado = getAuthorIdServer();

  req.status(200).json({ 
    msg: 'Obtenido autor con ID ${id}'
  })
}

function createAuthorControllers(req, res){

  const crear = createAuthorServer();

  req.status(201).json({
    msg: 'Autor creado exitosamente',
    data: crear
  });

}

function updateAuthorControllers(req, res){
 
 const actualizar = updateAuthorServer();

 req.status(200).json({
    msg:'Autor actualizado correctamente'
 })

}

function deleteAuthorControllers(req, res){

 const eliminar = deleteAuthorServer();

 req.status(200).json({
  msg: 'Autor con ID ${ } fue eliminado', eliminar
 })
}

module.exports = {
    getAuthorsControllers,
    getAuthorIdControllers,
    createAuthorControllers,
    updateAuthorControllers,
    deleteAuthorControllers
}