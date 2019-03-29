
module.exports = function (app, db) {
    var db = require("../models");


    //post new user 

    app.post("/api/user/", function (req, res) {
        console.log('route hit2')
        console.log(req.body);
        console.log(req.url);
        var name = req.body.name;
        var email = req.body.email;
        var location = req.body.location;
        var artType = req.body.artType;
        var bio = req.body.bio;


        console.log(req.body);

        db.user.create({
            name: name,
            email: email,
            location: location,
            artType: artType,
            bio: bio
        }).then(function (data) {
            res.json(data)
        })
    });



    //all users
    app.get("/api/user/", function (req, res) {
        var user = req.session.user;

        db.user.findAll().then(function (allUsers) {
            res.json(allUsers);
        })
    });

    //all art
    app.get("/api/art/", function (req, res) {
        db.art_table.findAll().then(function (allArt) {
            res.json(allArt);
        });
    })

    //get art by type
    app.get("/api/art/:art_medium", function (req, res) {
        var art_medium = req.params.art_medium;
        db.art_table.findOne({
            where: { art_medium: art_medium }
        });
    });

    //get user by name
    app.get("/api/user/:user_name", function (req, res) {
        var user_name = req.params.user_name;
        db.users.findOne({
            where: { user_name: user_name }
        });
    });

    //get artists by location
    app.get("/api/user/:location", function (req, res) {
        var location = req.params.location;
        db.users.findAll({
            where: { location: location }
        });
    });
}