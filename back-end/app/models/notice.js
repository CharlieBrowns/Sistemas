'use strict'

const Mongoose = require('mongoose')

const Notice = new Mongoose.Schema({
    title : {type: String, required: true},
    description : {type: String, required: true},
    photo : {type: String, required: true}
})

module.exports = Mongoose.model('Notice', Notice)