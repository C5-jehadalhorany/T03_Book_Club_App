const express = require("express");

const { createBook,
    getAllBooks,
    getBookById,
    deleteBooksById } = require("../../controllers/book");

const authentication = require("../../middlewares/authentication")
const authorization = require("../../middlewares/authorization")

const booksRouter = express.Router();

//create
booksRouter.post("/", authentication,createBook);
//getallbooks
booksRouter.get("/", authentication,getAllBooks);
//getbookById
booksRouter.get("/:id", authentication,getBookById);
//deletebook
booksRouter.delete("/:id", authentication,authorization,deleteBooksById);

module.exports = booksRouter;

