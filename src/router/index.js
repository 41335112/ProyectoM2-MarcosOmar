const { Router } = require("express");
const {
 getAuthorsControllers,
 getAuthorIdControllers,
 createAuthorControllers,
 updateAuthorControllers,
 deleteAuthorControllers
} = require("../../controllers/authors.Controllers");

const router = Router();



router.get("/authors", getAuthorsControllers);

router.get("/authors/:id", getAuthorIdControllers); 

router.post("/authors", createAuthorControllers);

router.put("/authors/id", updateAuthorControllers);

router.delete("/authors/:id", deleteAuthorControllers);


router.get(" / ", getPostsController );

router.get(" /:id ", idPostsController ); 

router.post(" / ", createPostsController );

router.put(" /:id ", updatePostsController );

router.delete(" /:id ", deletePostsController);

module.exports = {
    router
}