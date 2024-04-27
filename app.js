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

//añadir prefijos a rutas
app.use('/api', router)

// exportar modulo
export { app }