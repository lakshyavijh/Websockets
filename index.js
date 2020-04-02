var express = require('express');
var socket= require('socket.io');

//App setup
var app = express();

var server = app.listen(4000,function() {
    console.log("Listening to requests on 4000");
});

//static files
app.use(express.static('public'));

//Socekt setup
var io = socket(server);

io.on('connection',function(socket){
    console.log("made socket connection" ,socket.id);
});