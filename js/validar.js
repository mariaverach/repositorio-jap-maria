var boton = document.getElementById("botn");

boton.addEventListener("click",() => {
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("contraseña").value;
    
   if ( user== "" ) {
    document.getElementById("mensaje1").innerHTML = "Ingrese Usuario";
        
 } if ( pass == ""){
    document.getElementById("mensaje2").innerHTML = "Ingrese Contraseña";
} else { 
  sessionStorage.setItem("usuario", user);
  window.location = "index.html"

 }   

});

