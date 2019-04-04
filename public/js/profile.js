$(document).ready(function(){
   
    var user =localStorage.getItem("user");

console.log(user);
    $.get(`/api/user/${user}`, function(data) {
        
        // save/grab user from local storage
        var row = $("<div>");
         row.addClass("user");
         row.append("<p>User Name: " + data.user_name + "</p>");
         row.append("<p>Name: " + data.name + "</p>");
         row.append("<p>Email: " + data.email + "</p>");
         row.append("<p>Location: " + data.location + "</p>");
         row.append("<p>Art Medium: " + data.artType + "</p>");
         row.append("<p>About Me: " + data.bio + "</p>");
     
        $("#userInfo").prepend(row);
    });

    $.get(`/api/art/${user}`, function(data) {
        
        // save/grab user from local storage
        var row = $("<div>");
         row.addClass("user");
         row.append("<p>User Name: " + data.user_name + "</p>");
         row.append("<p>Title: " + data.title + "</p>");
         row.append("<p>Art Medium: " + data.artType + "</p>");
         row.append("<p>Art Path: " + data.art_path + "</p>");
     
        $("#artInfo").prepend(row);
    });

    $.get(`/api/jobs/${user}`, function(data) {
        
        // save/grab user from local storage
        var row = $("<div>");
         row.addClass("user");
         row.append("<p>Job Name: " + data[i].name + "</p>");
         row.append("<p>Job Position: " + data[i].position + "</p>");
         row.append("<p>Job location: " + data[i].location + "</p>");
         row.append("<p>Job type: " + data[i].type + "</p>");
         row.append("<p>Job Start Date: " + data[i].startDate + "</p>");
         row.append("<p>Job End Date: " + data[i].startDate + "</p>");
         row.append("<p>Job Contact: " + data[i].contact + "</p>");
     
        $("#jobInfo").prepend(row);
    });

})