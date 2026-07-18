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
const readBox = document.querySelector(".productDetail");
const PDsaveandcancel = document.querySelector('.PD-product-read-btn');
const PIsaveandcancel = document.querySelector('.PI-product-input-btn');
const overlay = document.querySelector('.PDPI-overlay');
const body = document.querySelector('body')
const PIcancel = document.querySelector('.PIcancel');
const PDcancel = document.querySelector('.PDcancel');
const allPDRead = document.querySelectorAll('.PD-ProductRead');
const PDsupplierRead = document.querySelectorAll('.PD-SupplierRead');
const PDorderInput = document.querySelectorAll('.PD-ProductOrder');
//Product Input//

const inputBox = document.querySelector('.productInput');
const allPIInput = document.querySelectorAll('.PI-ProductInput');
const PIsupplierInput = document.querySelectorAll('.PI-SupplierInput');
//btn group//
const GrupBtn = document.querySelector('.btnGroup');
const GroupBTND = document.querySelector('.btnGroupDisplay');
const inputbtn = document.querySelector('.plus-btn');
const checkbtn  = document.querySelector('.checkBtn');
const Xbtn = document.querySelector('.in-cancelHam');

products.forEach(function(product){
    product.addEventListener("click", function(){
            readBox.style.display = "flex"
            PDsaveandcancel.style.display ="flex"
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
    //PD cancel button//
    PDcancel.addEventListener("click", function(){
        readBox.style.display= "none";
        PDsaveandcancel.style.display="none";
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
        });
    //sampai sini //
 //PI cancel button//
    PIcancel.addEventListener("click", function(){
        inputBox.style.display= "none";
        PIsaveandcancel.style.display="none";
        overlay.style.display= "none";
        body.style.overflow = "auto";
        allPIInput.forEach(function(read){
        read.readOnly = false;
    });
    PIsupplierInput.forEach(function(supplier){
        supplier.readOnly = false;
    });
        allPIInput.forEach(function(clear){
        clear.value = "";
        });
        PIsupplierInput.forEach(function(clear){
        clear.value = "";    
        });
    });
    //save btn//
    //sampai sini//
    //overlay click//
    overlay.addEventListener("click", function(){
        inputBox.style.display ="none"
        readBox.style.display ="none"
        PDsaveandcancel.style.display ="none"
        PIsaveandcancel.style.display ="none"
        overlay.style.display ="none"
        GrupBtn.style.display ="flex"
        GroupBTND.style.display ="none"
        Xbtn.style.display ="none"
        inputbtn.style.display ="none"
        checkbtn.style.display ="none"
        body.style.overflow ="auto"

    });
    //grup btn//
    GrupBtn.addEventListener("click", function(){
        GroupBTND.style.display = "flex"
        inputbtn.style.display = "flex"
        checkbtn.style.display ="flex"
        GrupBtn.style.display ="none"
        Xbtn.style.display = "flex"
    });
    //cancel btn grup//
    Xbtn.addEventListener("click", function(){
        GroupBTND.style.display = "none"
        inputbtn.style.display ="none"
        checkbtn.style.display ="none"
        GrupBtn.style.display = "flex"
        Xbtn.style.display ="none"
    });
    //Input button//
inputbtn.onclick = () =>{
    inputBox.style.display = "flex";
    overlay.style.display = "block";
    PIsaveandcancel.style.display = "flex";
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
    //anti zoom di PC//
    document.addEventListener('wheel', function(wheelEvent){
        if (wheelEvent.ctrlKey){
            wheelEvent.preventDefault();
        };
    }, {passive: false});

});//DOM content//

