document.addEventListener('DOMContentLoaded', function () {
    // untuk search engine di website nya 
const searchInput = document.getElementById('searchInput');
const products = document.querySelectorAll('.product');

searchInput.addEventListener('input',function(){
    const filterText = searchInput.value.toLowerCase().trim();
    products.forEach(function(product){
        const productNameElement = product.querySelector('.productname');
        const productName = productNameElement.textContent.toLowerCase();
        const productcodeElement = product.querySelector('.productcode');
        const productcode = productcodeElement.textContent.toLowerCase();
        if (productName.includes(filterText) || productcode.includes(filterText)) {
            product.style.display= "";
        } else {
            product.style.display="none";
        
        }

    });
});
// sampai sini//

//urutkan nama//
const productContainer = document.querySelector('.products')
const listProduct = document.querySelectorAll('.product')

const arrayProduct = Array.from(listProduct)
arrayProduct.sort(function(productA, productB) {
    const nama1 = productA.querySelector('.productname').textContent.toLowerCase();
    const nama2 = productB.querySelector('.productname').textContent.toLowerCase();
    return nama1.localeCompare(nama2);
})
arrayProduct.forEach(function(item){
    productContainer.appendChild(item)
});


//product detail//
const productDetail = document.querySelector(".productDetail");
const saveandcancel = document.querySelector('.save-and-cancel');
const overlay = document.querySelector('.PD-overlay');
const body = document.querySelector('body')
const cancel = document.querySelector('.cancel');
const allPDRead = document.querySelectorAll('.PD-ProductRead');
const PDsupplierRead = document.querySelectorAll('.PD-SupplierRead');
const PDorderInput = document.querySelectorAll('.PD-ProductOrder');
const allPIInput = document.querySelectorAll('.PI-ProductInput');
const PIsupplierInput = document.querySelectorAll('.PI-SupplierInput');
const inputButton = document.querySelector('.plus-btn');
const inputBox = document.querySelector('.productInput');

products.forEach(function(product){
    product.addEventListener("click", function(){
            productDetail.style.display = "flex"
            saveandcancel.style.display ="flex"
            overlay.style.display = "block"
            body.style.overflow= "hidden"
         allPDRead.forEach(function(read) {
         read.readOnly= true;
         });
         PDsupplierRead.forEach(function(supplier){
         supplier.readOnly = true;
         });
    });
    });
    //sampai sini//
    //cancel button//
    cancel.addEventListener("click", function(){
        productDetail.style.display= "none";
        inputBox.style.display = "none";
        saveandcancel.style.display="none";
        overlay.style.display= "none";
        body.style.overflow = "auto";
        allPDRead.forEach(function(read){
        read.readOnly = true;
    });
    PDsupplierRead.forEach(function(supplier){
        supplier.readOnly = true;
    });
        allPDRead.forEach(function(clear){
        clear.value = "";
        });
        PDsupplierRead.forEach(function(clear){
        clear.value = "";    
        });
        PDorderInput.forEach(function(clear){
        clear.value = "";
        });
        allPIInput.forEach(function(clear){
        clear.value = "";
        });
        PIsupplierInput.forEach(function(clear){
        clear.value ="";
        });
        });

    //sampai sini //

    //Input button//
inputButton.onclick = () =>{
    inputBox.style.display = "flex";
    overlay.style.display = "block";
    saveandcancel.style.display = "flex";
    body.style.overflow = "hidden";
};
//sampai sini//
//anti zoom di hp//
document.addEventListener('touchmove',function (event) {
    if (event.touches.length > 1 ){
        event.preventDefault()
    }
}, { passive:false});

let doubleTap = 0 ;
document.addEventListener('touchend', function(zoom){
    const now = (new Date()).getTime();
    if(now - doubleTap <= 300){
        zoom.preventDefault();
    };
     doubleTap = now
    }, false);
    //sampe sini//
    document.addEventListener('wheel', function(wheelEvent){
        if (wheelEvent.ctrlKey){
            wheelEvent.preventDefault();
        };
    }, {passive: false});

});//DOM content//

