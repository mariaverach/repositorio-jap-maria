var product = [];
    
    function productosRelacionados(array) {

        let htmlContentToAppend = "";
        for(let i = 0; i < array.length; i++){
        let product = array;
               if (i === 1 || i=== 3)   {          
    
            htmlContentToAppend += `
            <div  >
            <div " id="` + product.name + `">
                <div >
                    <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">` + product.name + `</h4>
                        
                 
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
            document.getElementById("productCriteria").innerHTML = htmlContentToAppend;
        }
    }
    
    document.addEventListener("DOMContentLoaded", function () {
        getJSONData(PRODUCTS_URL).then(function(resultObj) {
              if (resultObj.status === "ok") {
                  infor= resultObj.data
                productosRelacionados(infor)
              }
            
          });
        });
              
  /////////////////////////////

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}


//////////////////////////////


document.addEventListener("DOMContentLoaded", function(){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product= resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCountHTML = document.getElementById("productCount");
            
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCountHTML.innerHTML = product.soldCount;
            

            productosRelacionados(infor)
            showImagesGallery(product.images);
        }
    });
});
