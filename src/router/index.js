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

const { 
  validarIdPost,
  validarCrearPost,
  validarActualizarPost
} = require("../../middlewares/middPost");

const router = Router();



router.get("/authors", getAuthorsControllers);

router.get("/authors/:id", validarIdAutor, getAuthorIdControllers); 

router.post("/authors", validarCrearAutor, createAuthorControllers);

router.put("/authors/:id", validarIdAutor, validarActualizarAutor,updateAuthorControllers);

router.delete("/authors/:id", validarIdAutor, deleteAuthorControllers);


router.get("/posts ", getPostsController );

router.get("/posts/:id ", validarIdPost, idPostsController ); 

router.post("/posts ", validarCrearPost, createPostsController );

router.put("/posts/:id ", validarIdPost, validarActualizarPost, updatePostsController );

router.delete("/posts/:id ", validarIdPost, deletePostsController);

module.exports = {
  router
}