//modulo nativo (path)
const path = require("path");

//requerimos el modulo de express (terceros)
const express = require ("express");

//dentro de app se encuentra la aplicación de express
const app = express();

//defino el puerto de escucha
const port = 3030;

//
app.use(express.static("public"));

//envio el archivo que se encuentra en la ruta, y uso path para armar la ruta completa del archivo
app.get('/', (req,res) => {
    res.sendFile(path.resolve("./views/index.html"))
});
app.get('/babbage', (req,res) => {
    res.sendFile(path.resolve("./views/babbage.html"))
});
app.get('/berners-lee', (req,res) => {
    res.sendFile(path.resolve("./views/berners-lee.html"))
});
app.get('/clarke', (req,res) => {
    res.sendFile(path.resolve("./views/clarke.html"))
});
app.get('/hamilton', (req,res) => {
    res.sendFile(path.resolve("./views/hamilton.html"))
});
app.get('/hopper', (req,res) => {
    res.sendFile(path.resolve("./views/hopper.html"))
});
app.get('/lovelace', (req,res) => {
    res.sendFile(path.resolve("./views/lovelace.html"))
});
app.get('/turing', (req,res) => {
    res.sendFile(path.resolve("./views/turing.html"))
});
app.get('*', (req,res) => {
    res.sendFile(path.resolve("./views/index.html"))
});

//función para escuchar el servidor en un puerto específico + callback
app.listen(port, () => {
    console.log("Escuchando por el puerto ", port);
});
