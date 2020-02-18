'use strict'

const Mongoose = require('mongoose')

const Events = new Mongoose.Schema({
    title : {type: String, required: true},
    created: { type: Date, default: Date.now },
    date : { type: Date, required: true },
    file : String,
    Organizers : { type: String, required: true},
    photo : { type: String, required: true},
    extraInformation : []
})

module.exports = Mongoose.model('Events', Events)