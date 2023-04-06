const express = require('express');
const cors = require("cors");

//dotenv
require('dotenv').config();

const { connection } = require('./config/dbConnect')

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());


//* CONEXION A BBDD
connection()

//* Para parsear // traducir
app.use(express.json());

//* Para parsear req con urlencoded payload
app.use(express.urlencoded({ extended: false }));

//* RUTAS







app.use('/api/v1', require('./routers/routersAdmin'));



//* En caso de error, mandar a la página 404 (Frontend y backend, hay que configurarlo)
app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: 'error 404',
        parrafo: `Page not found`
    })
});

//* Listener
app.listen(port, () => {
    console.log(`connected from port ${port}`)
})