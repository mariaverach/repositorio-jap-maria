const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

function autocompletado () {
  document.getElementById("busqueda").innerHTML = '';

  var  productos = [
      "Autos",
      "Celulares",
      "Computadoras",
      "Deporte",
      "Electrodomésticos",
      "Herramientas",
      "Juguetes",
      "Muebles",
      "Vestimenta",
      
  ];

  var pal = document.getElementById("buscar-pal").value;
  var tam = pal.length;
  for(indice in productos){
      var nombre = productos[indice];
      var str = nombre.substring(0,tam);
      if(pal.length <= nombre.length && pal.length != 0 && nombre.length != 0){
          if(pal.toLowerCase() == str.toLowerCase()){
              var node = document.createElement("LI");
              var textnode = document.createTextNode(productos[indice]);
              node.appendChild(textnode);
              document.getElementById("busqueda").appendChild(node);
          } else {
  alert('no')
}
      }
  }
}


var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("username").innerHTML = sessionStorage.getItem("usuario");
 });
 