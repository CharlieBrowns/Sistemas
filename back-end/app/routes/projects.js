'use strict'

const router = require('express').Router()
const { getCurrentProjects, newProject } = require('../controllers/projects.controller')

router.route('/project')
    .get(getCurrentProjects)
    .post(newProject)

module.exports = router