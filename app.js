const express = require('express');
const path = require('path');

const app = express();

app.listen(3010, ()=> console.log("Server is running smoothly on port 3010"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/index.html"));
});

app.get("/register.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/register.html"));
});
