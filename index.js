var express = require('express');

//App setup
var app = express();

var server = app.listen(4000,function() {
    console.log("Listening to requests on 4000");
});

//static 
app.use(express.static('public'));