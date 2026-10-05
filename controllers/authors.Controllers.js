const {
 getAuthorsServe, 
 getAuthorIdServer, 
 createAuthorServer 
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

  const resultado = createAuthorServer();

  req.status(201).json({
    msg: 'Autor creado exitosamente',
    data: resultado
  });

}
module.exports = {
    getAuthorsControllers,
    getAuthorIdControllers,
    createAuthorControllers
}