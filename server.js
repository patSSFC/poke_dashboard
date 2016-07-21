var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var app = express();
var port_number = 7788;

app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname + "/client/static")));
app.set("views", path.join(__dirname + "/client/static/views"));
app.set("view engine", "ejs");

require('./server/config/mongoose.js');
var routes = require('./server/config/routes.js');
routes(app);

app.listen(port_number, function(req, res) {
    console.log("Listening on port: " + port_number);
})
