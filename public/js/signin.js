$(document).ready(function () {

    $(document).on("click", "#signin", (event) => login(event))
    
    function login() {
        event.preventDefault();

        var user = {
            user_name: $("#userName").val().trim(),
            password: $("#password").val().trim()
        }
        console.log(user);

        $.get(`/api/user/${user.user_name}`).then(function (user) {
             localStorage.setItem('user', user.user_name);
             window.location.replace("/profile");
            })

    };
    // $("document").on("click", "#signin",function(){
    //     event.preventDefault();
    //     window.location.replace("/profile");
    // });

    $("document").on("click", "#account",function(){
        event.preventDefault();
        window.location.replace("/register");
    })
})    
