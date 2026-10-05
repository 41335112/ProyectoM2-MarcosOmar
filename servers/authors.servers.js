const { authors } = require("../db")

const getAuthorsServe = () => {
 
  return authors

}

const getAuthorIdServer = () => {
    
  return { id } = req.params
}

const createAuthorServer = () => {
  
  return req.body
}

const updateAuthorServer = () => {

 return { id } = req.params
}

const deleteAuthorServer = () => {

 return { id } = req.params   
}

module.exports = {
 getAuthorsServe,
 getAuthorIdServer,
 createAuthorServer,
 updateAuthorServer,
 deleteAuthorServer
}