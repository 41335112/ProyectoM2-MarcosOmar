const { Router } = require("express");

const {
 getAuthorsControllers,
 getAuthorIdControllers,
 createAuthorControllers,
 updateAuthorControllers,
 deleteAuthorControllers
} = require("../../controllers/authors.Controllers");

const {
 getPostsController,
 idPostsController,
 createPostsController,
 updatePostsController,
 deletePostsController,
} = require("../../controllers/post.controllers");

const { 
 validarIdAutor,
 validarCrearAutor,
 validarActualizarAutor
} = require("../../middlewares");

const router = Router();



router.get("/authors", getAuthorsControllers);

router.get("/authors/:id", validarIdAutor, getAuthorIdControllers); 

router.post("/authors", validarCrearAutor, createAuthorControllers);

router.put("/authors/id", validarIdAutor, validarActualizarAutor,updateAuthorControllers);

router.delete("/authors/:id", validarIdAutor, deleteAuthorControllers);


router.get(" /posts ", getPostsController );

router.get(" /posts/:id ", idPostsController ); 

router.post(" /posts ", createPostsController );

router.put(" /posts/:id ", updatePostsController );

router.delete(" /posts/:id ", deletePostsController);

module.exports = {
    router
}