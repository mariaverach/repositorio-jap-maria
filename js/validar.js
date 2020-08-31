var boton = document.getElementById("botn");

boton.addEventListener("click",() => {
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("contraseña").value;
    var username = sessionStorage.setItem("usuario", user);
   if (user == null || user.length== "" ) {
    document.getElementById("mensaje1").innerHTML = "Ingrese Usuario";
        
 } if (pass == null || pass.length == ""){
    document.getElementById("mensaje2").innerHTML = "Ingrese Contraseña";
} else { 
  window.location = "index.html"
 }   

});