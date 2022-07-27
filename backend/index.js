const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./models/db");
//all require
const booksRouter = require("./routes/books");
const commentRouter = require("./routes/comments");
const UsersRouter = require("./routes/users");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const roleRouter = require("./routes/rols");
const permissionRouter = require("./routes/permission");
const readRouter = require("./routes/redinglist")
const roomRouter = require("./routes/rooms")


const app = express();
const PORT = process.env.PORT || 5000
app.use(cors());
app.use(express.json());

//books
app.use("/book", booksRouter);
//comment
app.use("/comment", commentRouter);
//admin/users
app.use("/admin/users", UsersRouter);
//login
app.use("/login", loginRouter);
//register
app.use("/register", registerRouter);
//rols
app.use("/role", roleRouter);
// permission 
app.use("/permission", permissionRouter);
//reding list 
app.use("/list", readRouter);
//room
app.use("/room", roomRouter);




app.get("/", function (req, res) {
    res.send("the server is work")
})



app.listen(PORT, () => {
    console.log(` THE SERVER IS WORK ${PORT}`);
});