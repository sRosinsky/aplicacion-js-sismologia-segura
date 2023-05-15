const express = require("express");
const cors = require("cors")
const rateLimit = require("express-rate-limit")
require('dotenv').config()


const PORT = process.env.PORT || 5000;
const app = express();

// numero de peticiones maximo a la api

const limiter = rateLimit({
    windowMs: 2 * 60 * 1000,
    max: 300,
})
app.use(limiter);
app.set('trust proxy', 1);

app.use(express.static("public"))

//ruta

app.use('/api', require("./routes"))

app.use(cors());

app.listen(PORT, () => console.log("El servidor está escuchando en el puerto 5000"))

  
