miStorage = window.sessionStorage;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("usuario1").innerHTML = sessionStorage.getItem("usuario")
    });


localS= window.localStorage;




//botón para guardar Info
var botonGuardar = document.getElementById("btnSave"); 
botonGuardar.addEventListener("click",() => {
    obtenerDatos();
    infoShow();
});

//Para Obtener Datos 
function obtenerDatos() {
    var miPerfilObject = {
        "nombre" : document.getElementById("nomYApe").value,
        "correo" : document.getElementById("correo").value,
        "edad"   : document.getElementById("edad").value,
        "telefono"   : document.getElementById("telefono").value,
    }
   localS.setItem("miPerfilObject", JSON.stringify(miPerfilObject));
} 

//Para pasarlos a objeto 
function infoShow (){
    let miPerfilObject = JSON.parse(localS.getItem("miPerfilObject"));    
    
     document.getElementById("nombreYApellido").innerHTML = `<div>`+ miPerfilObject.nombre +`</div>`;
     document.getElementById("correo1").innerHTML = `<div>`+ miPerfilObject.correo +`</div>`;
     document.getElementById("edad1").innerHTML = `<div>`+ miPerfilObject.edad +`</div>`;
     document.getElementById("telefono1").innerHTML = `<div>`+ miPerfilObject.telefono +`</div>`;      
};


//limpiarDatos (solo funciona en la pestaña de aplicación, no conseguí que me borrara los datos)

function limpiarDatos(){
    var localS= window.localStorage;  
        localS.removeItem("miPerfilObject")
             

}