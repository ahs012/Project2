$(document).ready(function () {

    $(document).on("click", "#register", newUser)
    event.preventDefault();

    newUser = {
        user: $("#user-name").val().trim(),
        name: $("#name").val().trim(),
        location:$("#location").val().trim(),
        email: $("#email").val().trim(),
        artType: $("#interest").val().trim(),
        password: $("#password").val().trim(),
        bio:$("#bio").val().trim(),
    }
    console.log(newUser)

    $.post("/api/user", newUser)

        .then(function(){

            //save user id local

            //pull from local storage id
            res.redirect("../profile.html")
        })
})