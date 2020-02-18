'use strict'

const express = require('express'),
      app = require('express')(),
      port = (process.env.PORT || 4000),
      cors = require('cors'),
      bodyParser = require('body-parser') 
    //   projects = require('../app/routes/projects')
app
    .set('port',port)
    .use(bodyParser.urlencoded({extended:true}))
    .use(bodyParser.json())
    .use(cors())
    .use('/', require('../app/routes/projects'))
    .use('/archives', express.static(__dirname + '/public'))

module.exports = app
