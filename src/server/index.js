var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
const port = 8080;
app.listen(port, function () {
    console.log(`server running: http://localhost:${port}`);
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});
