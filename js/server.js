var express = require('express'); 
var app = express(); 
var path = require('path'); 

app.use(express.static('construction')); 
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

var server = app.listen(3009);
