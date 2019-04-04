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

})