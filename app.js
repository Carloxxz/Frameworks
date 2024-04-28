// cargar modulos de node
import express from "express";
import bodyParser from "body-parser";
import { router } from "./routes/articleRoute.js";

// ejecutar express (http)
const app = express()

// cargar ficheros rutas


//Middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//añadir prefijos a rutas
app.use('/api', router)

// exportar modulo
export { app }