$(document).ready(function () {

    $(document).on("click", "#signin", (event) => login(event))
    
    function login() {
        event.preventDefault();

        var user = {
            user_name: $("#userName").val().trim(),
            password: $("#password").val().trim()
        }

        localStorage.setItem('user', user_name)

            .then(function () {
                window.location.replace("/discover")
            })

    }
})    
