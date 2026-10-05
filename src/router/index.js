const { Router } = require("express");
const {
 getAuthorsControllers,
 getAuthorIdControllers,
 createAuthorControllers
} = require("../../controllers/authors.Controllers");

const router = Router();



router.get("/authors", getAuthorsControllers);

router.get("/authors/id", getAuthorIdControllers); 

router.post("/authors", createAuthorControllers);

// router.put("/authors/id", updateAuthorControllers);

// router.delete("/authors/id", deleteAuthorControllers);

module.exports = {
    router
}