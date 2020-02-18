'use strict'

const express = require('express'),
      app = require('express')(),
      port = (process.env.PORT || 8000),
      cors = require('cors'),
      bodyParser = require('body-parser') 
    //   projects = require('../app/routes/projects')
app
    .set('port',port)
    .use(bodyParser.urlencoded({extended:true}))
    .use(bodyParser.json())
    .use(cors())
    .use('/', (req, res) => {
        res.send({message: 'tu mama'})
    })
    .use('/archives', express.static(__dirname + '/public'))
    // .use('/', require('../app/routes/projects'))

module.exports = app
