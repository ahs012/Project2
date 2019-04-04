module.exports = function (app, db) {
    var db = require("../models");

    const express = require('express');
    const multer = require('multer');
    const path = require('path');
    const ejs = require('ejs');

    // Set The Storage Engine
    const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb){
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
    });

     // Init Upload
    const upload = multer({
        storage: storage,
        limits:{fileSize: 1000000},
        fileFilter: function(req, file, cb){
      checkFileType(file, cb);
    }
    }).single('myImage');

    // Check File Type
    function checkFileType(file, cb){
        // Allowed ext
        const filetypes = /jpeg|jpg|png|gif/;
        // Check ext
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        // Check mime
        const mimetype = filetypes.test(file.mimetype);
  
        if(mimetype && extname){
        return cb(null,true);
        } else {
        cb('Error: Images Only!');
        }
    }
    // EJS View Engine
    app.set('view engine', 'ejs');  

    ////////////POST REQUESTS/////////////////

    //post new user 

    app.post("/api/user/", function (req, res) {
        console.log('user route hit')
        console.log(req.body);
        var user_name=req.body.user_name
        var name = req.body.name;
        var email = req.body.email;
        var location = req.body.location;
        var artType = req.body.artType;
        var bio = req.body.bio;


        console.log(req.body);

        db.user.create({
            user_name:user_name,
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
    app.post("/api/newArt/",  function (req, res) {

        upload(req, res, (err) => {
            console.log('art route hit')
            console.log(req.body);
            if(err){
              res.render('index', {
                msg: err
              });
            } else {
              if(req.file == undefined){
                res.render('index', {
                  msg: 'Error: No File Selected!'
                });
              } else { 
                var user_name = req.body.user_name;
                var title = req.body.title;
                var art_medium = req.body.art_medium;
                var art_path = `uploads/${req.file.filename}`
        
                db.art.create({
                    user_name: user_name,
                    title: title,
                    art_medium: art_medium,
                    art_path: art_path
                }).then(function (data) {
                    res.json(data)
                })

              }
            }
        });


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

    //job by user
    app.get("/api/jobs/:user_name", function (req, res) {
        var user_name = req.params.user_name;
        db.jobs.findOne({
            where: { user_name: user_name }
        }).then(function (jobUser) {
            res.json(jobUser);
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
    app.get("/api/art/:user", function (req, res) {
        var user_name = req.params.user;
        db.art.findOne({
            where: { user_name: user_name}
        }).then(function (artPost) {
            res.json(artPost);
        });
    });

    //get art by user
    app.get("/api/art/:user_name", function (req, res) {
        var user_name = req.params.user_name;
        db.art.findAll({
            where: { user_name: user_name}
        }).then(function (artUser) {
            res.json(artUser);
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
        }).then(function (artistLoc) {
            res.json(artistLoc);
        })
    });
    
    ////////////UPDATE REQUESTS/////////////////

    //update art post
    app.put("/api/art", function(req, res) {
        db.art.update(req.body,
          {
            where: {
              name: req.body.name
            }
          })
          .then(function(update) {
            res.json(update);
          });
      });

    //update job post

    app.put("/api/jobs", function(req, res) {
        db.jobs.update(req.body,
          {
            where: {
              name: req.body.id
            }
          })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });

   
    ////////////DELETE REQUESTS/////////////////

    //delete job post by name
    
    app.delete("/api/jobs/:name", function(req, res){
        var name=req.params.name;
        db.jobs.destroy({
            where:{
                name:name
            }
        }).then(function(data){
            res.json(data);
        })
    });
    
    //delete art by name

    app.delete("/api/art/:name", function(req, res){
        var name=req.params.name;
        db.jobs.destroy({
            where:{
                name:name
            }
        }).then(function(data){
            res.json(data);
        })
    });
}
