$(document).ready(function () {

    $(document).on("click", "#register", (event) => createNewUser(event))
    // event.preventDefault();

    function createNewUser() {
        event.preventDefault();

        var newUser = {
            user_name: $("#user-name").val().trim(),
            name: $("#name").val().trim(),
            location: $("#Location").val().trim(),
            email: $("#email").val().trim(),
            artType: $("#interest").val().trim(),
            password: $("#password").val().trim(),
            bio: $("#bio").val().trim(),
        };
        console.log(newUser);
        localStorage.setItem('user', newUser.user_name)
        $.post("/api/user", newUser)
            

            .then(function () {

                //save user id local

                //pull from local storage id
                window.location.replace("/profile");
            })

    };




});