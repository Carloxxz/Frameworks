import mongoose from "mongoose"
import { app } from './app.js'
import { config } from "dotenv"

config()

const port = 3900
const connectionString = process.env.MONGO_URL

mongoose.connect(connectionString)
    // , {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // })
    .then(() => {
        console.log('Conectado a mongoDB Atlas')
        app.listen(port, () => {
            console.log(`Servidor corriendo en http://localhost:${port}`)
        })
    })
    .catch((err) => console.error('Error al conectar a MongoDB Atlas ', err))

