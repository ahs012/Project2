
module.exports = function (app, db) {
    var db = require("../models");

    ////////////POST REQUESTS/////////////////

    //post new user 

    app.post("/api/user/", function (req, res) {
        console.log('user route hit')
        console.log(req.body);
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

    //post new art
    app.post("/api/newArt/", function (req, res) {
        console.log('art route hit')
        console.log(req.body);
        var user = req.body.user;
        var name = req.body.name;
        var location = req.body.location;
        var art_medium = req.body.art_medium;

        console.log(req.body);

        db.art.create({
            user: user,
            name: name,
            location: location,
            art_medium: art_medium
        }).then(function (data) {
            res.json(data)
        })
    });

    //post new job
    app.post("/api/jobs", function (req, res) {
        console.log("job post route hit");
        var position = req.body.position;
        var name = req.body.name;
        var location = req.body.location;
        var type = req.body.type;
        var dates = req.body.dates;
        var contact = req.body.contact;

        console.log(req.body);

        db.jobs.create({
            position: position,
            name: name,
            location: location,
            type: type,
            dates: dates,
            contact: contact
        }).then(function (data) {
            res.json(data);
        })
        console.log("job has been posted");
    });

   
    ////////////GET REQUESTS/////////////////

    //all users
    app.get("/api/user/", function (req, res) {
        var user = req.session.user;

        db.user.findAll().then(function (allUsers) {
            res.json(allUsers);
        })
    });

    //all art
    app.get("/api/art/", function (req, res) {
        db.art.findAll().then(function (allArt) {
            res.json(allArt);
        });
    });

    //all jobs
    app.get("/api/jobs/", function (req, res) {
        db.jobs.findAll().then(function (allJobs) {
            res.json(allJobs)
        });

    });

    //job by type
    app.get("/api/jobs/:type", function (req, res) {
        var type = req.params.type;
        db.jobs.findOne({
            where: { type: type }
        }).then(function (jobType) {
            res.json(jobType);
        });
    });

    //get art by type
    app.get("/api/art/:art_medium", function (req, res) {
        var art_medium = req.params.art_medium;
        db.art.findOne({
            where: { art_medium: art_medium }
        }).then(function (artType) {
            res.json(artType);
        });
    });

    //get art by name
    app.get("/api/art/:name", function (req, res) {
        var name = req.params.name;
        db.art.findOne({
            where: { name: name }
        }).then(function (artName) {
            res.json(artName);
        });
    });
    
    //get user by name
    app.get("/api/user/:user_name", function (req, res) {
        var user_name = req.params.user_name;
        db.user.findOne({
            where: { user_name: user_name }
        }).then(function (userName) {
            res.json(userName);
        })
    });

    //get artists by location
    app.get("/api/user/:location", function (req, res) {
        var location = req.params.location;
        db.user.findAll({
            where: { location: location }
        });
    });

    ////////////DELETE REQUESTS/////////////////


}