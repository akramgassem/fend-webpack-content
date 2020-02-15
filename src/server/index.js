const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js').default

const app = express()
const cors = require('cors')

app.use(express.static('dist'));

app.use(cors())

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
