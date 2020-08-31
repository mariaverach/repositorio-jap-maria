const ORDER_ASC_BY_COST = "Mayor Precio";
const ORDER_DESC_BY_COST =  "Menor Precio";
const ORDER_BY_PROD_COUNT = "Relevancia";
var   currentProductArray = [];
var currentSortCriteria = undefined;
var minCost= undefined;
var maxCost = undefined;

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_COST)
    {
            result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_COST){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let asoldCount = parseInt(a.soldCount);
            let bsoldCount = parseInt(b.soldCount);

            if ( asoldCount < bsoldCount ){ return 1; }
            if ( asoldCount > bsoldCount ){ return -1; }
            return 0;
        });
    }

    return result;
}

//listado De Producto 
function showProductsList(array) {

    let htmlContentToAppend = "";
    for (let i = 0; i < currentProductArray .length; i++) {
        let product = currentProductArray [i];

        if (((minCost == undefined) || (minCost != undefined && parseInt(product.cost) >= minCost)) &&
            ((maxCost == undefined) || (maxCost != undefined && parseInt(product.cost) <= maxCost))){

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action" >
            <div class="row " id="` + product.name + `">
                <div class="col-3">
                    <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">` + product.name + `</h4>
                        <small class="text-muted">` + product.soldCount +` </small>
                 
                        </div>
                
                 <div> ` + product.description + `</div>
                 <div> `+ product.cost +`
                </div>
                <div> `+ product.currency +`
                </div>
                </div>
            </div>
        </div>
        `
            }
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}
    function sortAndshowProductsList(sortCriteria, productArray){
        currentSortCriteria = sortCriteria;
    
        if(productArray  != undefined){
            currentProductArray  = productArray;
        }
    
        currentProductArray  = sortProducts(currentSortCriteria, currentProductArray );

showProductsList()
    }



document.addEventListener("DOMContentLoaded", function () {
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
          if (resultObj.status === "ok") {
            sortAndshowProductsList(ORDER_ASC_BY_COST, resultObj.data);
          }
      });
     
    document.getElementById("menorPrecio").addEventListener("click", function(){
        sortAndshowProductsList(ORDER_ASC_BY_COST);
    });

    document.getElementById("mayorPrecio").addEventListener("click", function(){
        sortAndshowProductsList(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndshowProductsList(ORDER_BY_PROD_COUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCostMin").value = "";
        document.getElementById("rangeFilterCostMax").value = "";

        minCost = undefined;
        maxCost = undefined;

        showProductsList();
    });

    document.getElementById("rangeFilterCost").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        maxCost = document.getElementById("rangeFilterCostMax").value;
        minCost = document.getElementById("rangeFilterCostMin").value;

        if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0){
            maxCost = parseInt(maxCost);
        }
        else{
            minCost = undefined;
        }

        if ((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0){
            minCost = parseInt(minCost);
        }
        else{
            minCost = undefined;
        }

        showProductsList();
    });
});