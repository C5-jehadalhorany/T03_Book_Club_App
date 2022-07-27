const express = require("express");

const {  createRoom,
    getAllRoom,
    getRoomById,
    deleteRoomById } = require("../../controllers/room");

const authentication = require("../../middlewares/authentication")
const authorization = require("../../middlewares/authorization")

const roomRouter = express.Router();

//create
roomRouter.post("/:id", authentication,createRoom);
//getallbooks
roomRouter.get("/", authentication,getAllRoom);
//getbookById
roomRouter.get("/:id", authentication,getRoomById);
//deletebook
roomRouter.delete("/:id", authentication,authorization,deleteRoomById);

module.exports = roomRouter;