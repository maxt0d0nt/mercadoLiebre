const express = require("express")
const path = require("path")
const app = express();

app.use(express.static("public")),

app.get("/", (req, res) => {
    const archivo = path.join(__dirname, "./views/home.html");
    res.sendFile(archivo);
});

app.get("/register", (req, res) => {
    const archivo = path.join(__dirname, "/views/register.html");
    res.sendFile(archivo);
});

app.listen(3000, () => console.log("servidor corriendo"));
