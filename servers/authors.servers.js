const { authors } = require("../db")

const getAuthorsServe = () => {
 
  return authors

}

const getAuthorIdServer = (id) => {
    
  const autorEncontrado = authors.find((autor) => autor.id === Number(id));
  return autorEncontrado
}

const createAuthorServer = (datosAutor) => {
  
  const nuevoAutor = {
    id: authors.length + 1, // Asigna un ID automático básico
    ...datosAutor
  };
  
  authors.push(nuevoAutor);
  return nuevoAutor;
}

const updateAuthorServer = (id, datosActualizados) => {

  const i = authors.findIndex((autor) => autor.id === Number(id));

  if (i === -1) {
    return null;
  }

  authors[i] = {
    ...authors[i],
    ...datosActualizados
  };

  return authors[i]
}

const deleteAuthorServer = (id) => {
 
  const i = authors.findIndex((autor) => autor.id === Number(id));

  if ( i === -1) {
    return null;
  }
   
  const [autorEliminado] = authors.splice( i, 1);
  return autorEliminado;
}

module.exports = {
 getAuthorsServe,
 getAuthorIdServer,
 createAuthorServer,
 updateAuthorServer,
 deleteAuthorServer
}