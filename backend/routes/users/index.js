const express = require("express");
const UsersRouter = express.Router();
const {getAllUsers,updateUser,deleteUser ,getUserById}=require("../../controllers/user")

UsersRouter.get("/",getAllUsers)
UsersRouter.delete("/:id",deleteUser)
UsersRouter.put("/:id",updateUser)
UsersRouter.post("/" , getUserById)

module.exports = UsersRouter;
