const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books");

/* GET all books */
router.get("/", booksController.getAllBooks);
router.get("/:id", booksController.getOneBook);
router.post("/", booksController.addOneBook);
router.patch("/:id", booksController.updateOneBook);
router.delete("/:id", booksController.removeOneBook);

module.exports = router;
