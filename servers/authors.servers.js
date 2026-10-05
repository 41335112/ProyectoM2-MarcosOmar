const { authors } = require("../db")

const getAuthorsServe = () => {
 
 return authors

}

const getAuthorIdServer = () => {
    
    return { id } = req.params
}

module.exports = {
 getAuthorsServe,
 getAuthorIdServer
}