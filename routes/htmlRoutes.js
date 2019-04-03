var path = require("path");


module.exports = function(app){
//homepage route
app.get("/", function(req, res){

    res.sendFile(path.join(__dirname, "../public/signin.html"))
});

//discover route
app.get("/discover", function(req, res){
    //if session is set, send file path. else, redirect to "/"

    res.sendFile(path.join(__dirname, "../public/discover.html"))
});
//registration
app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname, "../public/register.html"))
});
//profile route
 app.get("/profile/:user_name", function(req, res){
   
     res.sendFile(path.join(__dirname, "../public/profile.html"))
});
//Image Upload
app.get("/upload", function(req, res){
    res.sendFile(path.join(__dirname, "../views/partials/upload.html"))
});
};

