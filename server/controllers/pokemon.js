var mongoose = require('mongoose');
var Pokemon = mongoose.model("Pokemon");

module.exports = {
    getAll : function(req, res) {
        Pokemon.find({}, function(err, pokemon) {
            if(err) {
                console.log("Error! " + err);
            } else {
                res.render("index", {poke_list: pokemon});
            }
        });
    },
    findPokemon : function(req, res) {
        var pokeName = req.params.name;
        Pokemon.find({name: pokeName}, function(err, pokemon) {
            if(err) {
                console.log("Error: " + err);
            } else {
                //functional but needs formatting with ejs
                res.render("index", {poke_list: pokemon});
            }
        });
    },
    editPokemon : function(req, res) {
        var pokeName = req.params.name;
        console.log(pokeName);
        Pokemon.find({name: pokeName}, function(err, pokemon) {
            if(err) {
                // console.log(pokemon);
                console.log("Error:" + err);
            } else {
                console.log("success!");
                console.log(pokemon);
                res.render("edit", {poke_list: pokemon});
            }
        });
    },
    postEdit : function(req, res) {
        var pokeName = req.params.name;
        var pokemon = new Pokemon({
            name: req.body.name,
            type: req.body.type,
            height: req.body.height,
            weight: req.body.weight
        });
        console.log(pokemon._id);
        Pokemon.findOne({_id: pokemon._id}, function(err, poke) {
            poke.name = pokemon.name,
            poke.type = pokemon.type,
            poke.height = pokemon.height,
            poke.weight = pokemon.weight;
            poke.save(function(err) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("done updated!");
                }
            })
        });
    },
    postNew : function(req, res) {
        console.log("POST DATA \n\n", req.body);
        console.log(req.body.type);
        var pokemon = new Pokemon({
            name: req.body.name,
            type: req.body.type,
            height: req.body.height,
            weight: req.body.weight
        });
        pokemon.save(function(err) {
            if(err) {
                console.log("Error: " + err);
            } else {
                console.log("Pokemon added to DB");
            }
        });
        res.redirect('/');
    }

};
