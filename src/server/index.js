const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(express.static('dist'));

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

console.log(__dirname)

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
})

const PORT = 8081;

// designates what port the app will listen to for incoming requests
app.listen(PORT,  () => {
    console.log(`Example app listening on port ${PORT}`)
})

app.get('/test', (req, res) => {
    res.send(mockAPIResponse)
})
