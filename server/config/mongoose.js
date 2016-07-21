var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');

var models_dir = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/pokemon_db');

// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_dir).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
         // require the file (this runs the model file which registers the schema)
        require(models_dir + '/' + file);
    }
})
