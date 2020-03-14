var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;

const indexRoute = require(./in)

app.listen(port);
console.log('The magic happens on port ' + port);


app.use('/user', userRoutes);