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

const router = Router();



router.get("/authors", getAuthorsControllers);

router.get("/authors/:id", getAuthorIdControllers); 

router.post("/authors", createAuthorControllers);

router.put("/authors/id", updateAuthorControllers);

router.delete("/authors/:id", deleteAuthorControllers);


router.get(" /posts ", getPostsController );

router.get(" /posts/:id ", idPostsController ); 

router.post(" /posts ", createPostsController );

router.put(" /posts/:id ", updatePostsController );

router.delete(" /posts/:id ", deletePostsController);

module.exports = {
    router
}