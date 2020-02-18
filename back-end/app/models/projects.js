'use strict'

const Mongoose = require('mongoose')

const Project = new Mongoose.Schema({
    Title: { type: String, required: true },
    Formulacion: { type: String, required: true },
    Objectives: { type: String, required: true },
    Solution: { type: String, required: true },
    Photography: { type: String, required: true },
    Video: { type: String, required: true },
    Technologies: [],
    Conclusions: { type: String, required: true },
    Created: { type: Date, default: Date.now },
    Area: { type: String, enum: ['Informatica', 'Redes', 'Robotica'] },
    Semester: {
        type: String,
        enum: [
            '1er Semestre',
            '2do Semestre',
            '3er Semestre',
            '4to Semestre',
            '5to Semestre',
            '6to Semestre',
            '7mo Semestre',
            '8vo Semestre',
            '9no Semestre',
            '10mo Semestre']
    },
    Creator: { type: String, required: false }
    // Creator: { type: Mongoose.Schema.ObjectId, ref: "entrepreneour" }
})

module.exports = Mongoose.model('Project', Project)