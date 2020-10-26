const CART_INFO2_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json"

let dataProduct = "";
let jsonM


function elements (json) {
    let object = json.articles;
    dataProduct += `
    <div class= "card" style="width: 18rem; margin-left:30px" >
    <img src="` + object[0].src + `"  class="img-thumbnailcard-img-top img-fluid mx-auto " alt="Responsive image"" >
    <div class="col">
      <div class="d-flex w-100 justify-content-between">
        <h4 class="mb-1">` + object[0].name + `</h4>
        </div>
        <div class="card-body">
        <div >` + object[0].count +` </div>     
        <div> `+ object[0].unitCost +`</div>
        <input type="checkbox"> `+ object[0].currency +` </input>
        <br>
        <input type="checkbox"> `+ object[1].currency +` </input>
        </p>
        </div>
    </div>
</div>
`
    document.getElementById("productoCar").innerHTML = dataProduct;


}


//calculo de cantidad y precio 
function result(json) {
    let costo;
    let object = json.articles;
    let valor = document.getElementById("cantidad").value;
    if (object[0].currency == 'UYU') {
        costo = object[0].unitCost / 40;
    }
    let resultado = valor * costo;
    document.getElementById("resultado").innerHTML = `Resultado = ` + object[1].currency + ` ` + resultado + ``;
}



function subtotal() {
    result(jsonM);
}

function Total() {
    let premium = document.getElementById("premium").value;
    let estandar = document.getElementById("estandar").value;
    let express = document.getElementById("express").value;

     if (document.getElementById("envio")=== premium); {
        premium = 0.15;
    }
    let totalPremium = sumbotal() * premium;
    document.getElementById("Total").innerHTML = `Resultado = ` + subtotal() + ` ` + totalPremium + ``;
}

function calcular(json){
    //Obtienes el valor
    var premium= document.getElementById("premium").value;
    let estndar= document.getElementById("estandar").value;
    var express= document.getElementById("express").value;

   if (premium)
    //le descuentas el 8% y lo agregas al HTML
    var descuento = parseInt(valor)*0.08;
  
    //agrega los resultados al DOM
    result.innerHTML = 'Ahorro de: $' + descuento;
    total.innerHTML =  'Total:     $' + (parseInt(valor)*descuento);
  }

  //Validacion datos tarjeta de cedito


    var aceptar = document.getElementById("aceptar");
    aceptar.addEventListener("click",() => {
        var tarjeta = document.getElementById("tarjeta").value;
        var nombreyape = document.getElementById("nomyApe").value;
        var codigo = document.getElementById("codigo").value;
        
       if (tarjeta == "") {
           
        document.getElementById("mensaje1").innerHTML = "Ingrese Información";
            
     } if (nombreyape == "" ){
        document.getElementById("mensaje2").innerHTML = "Ingrese Información";
     }if (codigo == "" ){
            document.getElementById("mensaje3").innerHTML = "Ingrese Información";
    } else { 
        document.getElementById("mensaje4").innerHTML = "Compra Realizada con Éxito";
    
     }   
    
    });

    var aceptar2 = document.getElementById("aceptar");
    aceptar2.addEventListener("click",() => {
        var nombre = document.getElementById("nombreD").value;
        var referencia = document.getElementById("referencia").value;
                
       if (nombre == "") {
           
        document.getElementById("mensaje1").innerHTML = "Ingrese Información";
            
     } if (referencia == "" ){
        document.getElementById("mensaje2").innerHTML = "Ingrese Información";
    
    } else { 
        document.getElementById("mensaje4").innerHTML = "Compra Realizada con Éxito";
    
     }   
    
    });

//Desplegar campos

function desplegar(){
    $("#collapseOne").collapse('show');
    $("collapseTwo").collapse('hide');
    } 
    function desplegar2(){
    $("#collapseOne").collapse('hide');
    $("collapseTwo").collapse('show');
    }
//Calcular porcentajes 

//$('#aceptar').click(function() {
//    let premium = document.getElementById("premium")
//    let estandar = document.getElementById("estandar")
//    let express = document.getElementById("express")

//    if ($('#premiun.selcet').val().trim() === '') {
      //  alert('Debe seleccionar una opción');

 //   } else {
 //       alert('Campo correcto');
 ///   }
//});

// Función para validar las opciones de envío (Foro de internet y documentación de Boostrap)
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
 event.preventDefault();

 if (form.checkValidity() === false) {
   alert("failed");
   form.classList.add('was-validated');
 } else {
   alert("sucess");

   
 }
}, false);

//validar formas de pago







//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(){
    getJSONData(CART_INFO2_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            elements(resultObj.data);   
            jsonM = resultObj.data;
                      
        }
        
    });

});