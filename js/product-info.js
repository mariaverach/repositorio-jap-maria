var product = {};
    ''
    document.addEventListener("DOMContentLoaded", function() {
    getJSONData(PRODUCTS_URL);"[1,2]".then(function(resultObj) {
        if (resultObj.status === "ok") 
        productCriteria = resultObj.data;        
        let  criteria = document.getElementById("productCriteria");

        criteria.innerHTML = productCriteria.name;
            
        
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


document.addEventListener("DOMContentLoaded", function(showProductsCriteria){
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
            

           
            showImagesGallery(product.images);
        }
    });
});
