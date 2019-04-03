$(document).ready(function () {

    $(document).on("click", "#signin", (event) => login(event))
    
    function login() {
        event.preventDefault();

        var user = {
            user_name: $("#userName").val().trim(),
            password: $("#password").val().trim()
        }

        $.get(`/api/user/${user.user_name}`).then(function (user) {
             localStorage.setItem('user', user.user_name);
             window.location.replace("/discover");
            })

    };
})    
