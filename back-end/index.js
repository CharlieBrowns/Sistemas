'use strict'

const app = require('./app/app')

require('./config/connection')

app.listen(app.get('port'), (err) => {
    if (err) throw err
    console.log(`Server running on port ${app.get('port')}`)
})