'use strict'

const Project = require('../models/projects')

async function getCurrentProjects(req, res) {
    // extrayendo el limite de la busqueda
    var dateGT = new Date(`${new Date().getFullYear()}-01-01T00:00:01.150Z`)
    let allProjects = await Project.find().where('Created').gt(dateGT).sort('-Created').limit(6)
    res.json(allProjects)
}

async function newProject(req, res) {
    const newProject = new Project(req.body)
    await newProject.save()
    res.json({message : 'se ha guardado exitosamente'})
}


module.exports = {
    getCurrentProjects,
    newProject
}