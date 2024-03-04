const express = require('express');
const app = express();
const port = 3300;
const path = require('path');

app.use(express.static('build'));
app.listen(port);

app.use(express.static(__dirname + '/build'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

