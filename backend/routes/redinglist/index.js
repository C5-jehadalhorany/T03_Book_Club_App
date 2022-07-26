const express = require("express");

// Import articles controllers

const {
    seeList,
    getReadBookById,
    removefromList,
    addToList,
} = require("../../controllers/readlist");

// Middleware
const authentication = require("../../middlewares/authentication");
const authorization = require("../../middlewares/authorization");

// Create books router
const readRouter = express.Router();

readRouter.post("/:id", authentication, addToList);

readRouter.get("/", authentication, seeList);

readRouter.get("/:id", getReadBookById);

readRouter.put("/:id", authentication, removefromList);

module.exports = readRouter;