const express = require("express");

const app = express();
const PORT = 3000

app.get("/", function (req, res) {
    res.send("the server is work")
})



app.listen(PORT, () => {
    console.log(" THE SERVER IS WORK");
})