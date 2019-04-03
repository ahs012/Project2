$(document).ready(function(){
    $.get("/api/user", function(data) {
        
        // save/grab user from local storage
        var row = $("<div>");
         row.addClass("user");
         row.append("<p>" + req.body.user_name + "</p>");
         row.append("<p>" + req.body.name + "</p>");
         row.append("<p>" + req.body.email + "</p>");
         row.append("<p>" + req.body.location + "</p>");
         row.append("<p>" + req.body.artType + "</p>");
         row.append("<p>" + req.body.bio + "</p>");
     
        $("#userInfo").prepend(row);
    });

})