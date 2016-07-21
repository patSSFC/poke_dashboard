var mongoose = require('mongoose');

var PokeSchema = new mongoose.Schema({
    name: String,
    type: String,
    height: Number,
    weight: Number
    // cp: Number
});

var Pokemon = mongoose.model('Pokemon', PokeSchema);
