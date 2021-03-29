const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use(express.static(__dirname + '/build/'))
app.use( '/', serveStatic( path.join(__dirname, '/build/templates') ) )

const port = 8080
app.listen(port)

console.log('Listening on port: ' + port)
