miStorage = window.sessionStorage;
var login = sessionStorage.getItem("usuario");

document.addEventListener("DOMContentLoaded",() => {
    if (login == null || !login ){
        window.location = "login.html"
    } 
});

