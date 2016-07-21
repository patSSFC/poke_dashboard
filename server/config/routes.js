// var mongoose = require('mongoose');
// var Pokemon = mongoose.model("Pokemon");
var pokemon = require('../controllers/pokemon.js');
module.exports = function(app) {
    //getAll
    app.get('/', function(req, res) {
        pokemon.getAll(req, res);
    });

    //enter new Pokemon (don't need to modify logic for this)
    app.get('/pokemon/new', function(req, res) {
        res.render("new");
    });

    //find a pokemon
    app.get('/pokemon/:name', function(req, res) {
        pokemon.findPokemon(req, res);
    });

    //find a pokemon, edit stats
    app.get('/pokemon/:name/edit', function(req, res) {
        pokemon.editPokemon(req, res);
    });

    //post edited pokemon
    app.post('/pokemon/:name', function(req, res) {
        pokemon.postEdit(req, res);
    });

    // POST '/mongooses/:id/destroy' Should delete the mongoose from the database by ID.
    //post new pokemon to db
    app.post('/pokemon', function(req, res) {
        pokemon.postNew(req, res);
    });
};
