const express = require("express")
const roleRouter = express.Router();
const {createRole} = require("../../controllers/rols")
roleRouter.post("/", createRole)
module.exports = roleRouter
