import mongoose from "mongoose"
import { app } from './app.js'

const port = 3900
const connectionString = 'mongodb+srv://carloxmz:2222102002@cluster0.dnc0uk1.mongodb.net/'

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

