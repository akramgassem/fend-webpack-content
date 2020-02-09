const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js').default;

const app = express();

app.use(express.static('src/client'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('/client/views/index.html', { root: __dirname + '/..' });
});

// designates what port the app will listen to for incoming requests
const port = 8080;
app.listen(port, () => {
  console.log(`server running: http://localhost:${port}`);
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});
