'use strict'

const router = require('express').Router()
const {} = require('../controllers/events.contoller')

router.route('/event')
    .get(getCurrentEvents)

module.exports = router