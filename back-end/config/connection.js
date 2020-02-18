'use strict'

const Mongoose = require('mongoose'),
      dataSecret = require('./database.json')

const uri = dataSecret.mongoDB.uri
const config = {
    user : process.env.DB_USER || dataSecret.mongoDB.user,
    pass : process.env.DB_PASS || dataSecret.mongoDB.pass,
    useNewUrlParser : true
}

const connection = Mongoose.connect(uri, config, (err) => {
    // return (err) ? console.log(`ha ocurrido un error : ${err}`) : console.log(`se 
    // ha conectado exitosamente la base de datos`)
    console.log("conexion exitosa")    
})

module.exports = connection