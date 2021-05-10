var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('src/client'))

console.log('__dirname => '+ __dirname)

app.get('/', function (req, res) {
    res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
})
const PORT = 8080
// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`app listening on port ${PORT} http://localhost:${PORT}/`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
