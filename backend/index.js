const express = require("express");
require("dotenv").config();
const cors = require("cors");

require("./models/db");



const app = express();
const PORT = process.env.PORT || 5000
app.use(cors());
app.use(express.json());




app.get("/", function (req, res) {
    res.send("the server is work")
})



app.listen(PORT, () => {
    console.log(` THE SERVER IS WORK ${PORT}`);
});