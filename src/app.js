const express = require('express');
const path = require('path');

const app = express();

/* Reemplazamos esta linea:
app.listen(3010, ()=> console.log("Server is running smoothly on port 3010"));

/*Por la siguiente:                                                          */
app.listen(process.env.PORT ? process.env.PORT : 3010, () => {
    console.log("Server is running smoothly!");
});
// Esto nos sirve para enviar el proyecto a Heroku y tenerlo online siempre.


app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/index.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/login.html"));
});
