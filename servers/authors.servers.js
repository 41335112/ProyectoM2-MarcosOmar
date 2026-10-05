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

module.exports = {
 getAuthorsServe,
 getAuthorIdServer,
 createAuthorServer
}