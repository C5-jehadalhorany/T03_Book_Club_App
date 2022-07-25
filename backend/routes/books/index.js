const express = require("express");

const { createBook,
    getAllBooks,
    getBookById,
    deleteBooksById } = require("../../controllers/book");

const booksRouter = express.Router();

//create
booksRouter.post("/", createBook);
//getallbooks
booksRouter.get("/", getAllBooks);
//getbookById
booksRouter.get("/:id", getBookById);
//deletebook
booksRouter.delete("/:id", deleteBooksById);

module.exports = booksRouter;

