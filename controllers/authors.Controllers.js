const { pool } = require("../src/config/dbConnect");

const {
 getAuthorsServe, 
 getAuthorIdServer, 
 createAuthorServer, 
 updateAuthorServer,
 deleteAuthorServer
} = require("../servers/authors.servers");


const getAuthorsControllers = async(req, res) =>{
  
  const resultado = await getAuthorsServe();
 
  res.status(200).json({
    msg: 'todo ok, authors listado',
    data: resultado
  });
}

const getAuthorIdControllers = async(req, res) =>{
  
  const { id } = req.params;  
  const resultado = await getAuthorIdServer(id);

  res.status(200).json({ 
    msg: `Obtenido autor con ID ${id}`,
    data: resultado
  })
}

const createAuthorControllers = async(req, res) =>{
  
  const { nombre, gmail, bio }= req.body;  
  
  if (!nombre || !gmail) {
      return res.status(400).json({ error: 'Nombre y gmail son requeridos' });
  }
 
  const newAuthor = await createAuthorServer({ nombre, gmail, bio });
    res.status(201).json(newAuthor);
  

}

const updateAuthorControllers = async(req, res) =>{
 
  const { id } = req.params;
  const actualizar = await updateAuthorServer(id, req.body);

  if (!actualizar) {
    return res.status(404).json({ 
        msg: `El autor con ID ${id} no existe`
    });
  }

  res.status(200).json({
    msg: `Autor con ID ${id} actualizado correctamente`,
  });

}

const deleteAuthorControllers = async(req, res) =>{
 
  const { id } = req.params;
  const eliminar = await deleteAuthorServer(id);

  if (!eliminar) {
    return res.status(404).json({
        msg: `El autor con ID ${id} no existe`
    });
  }

  res.status(200).json({
    msg: `Autor con ID ${id} fue eliminado`,
  });
}

module.exports = {
    getAuthorsControllers,
    getAuthorIdControllers,
    createAuthorControllers,
    updateAuthorControllers,
    deleteAuthorControllers
}