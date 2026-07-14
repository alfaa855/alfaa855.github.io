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

products.forEach(function(product){
    product.addEventListener("click", function(){
            productDetail.style.display = "flex"
            saveandcancel.style.display ="flex"
            overlay.style.display = "block"
            body.style.overflow= "hidden"
        });
    });
    cancel.addEventListener("click", function(){
        productDetail.style.display= "none";
        saveandcancel.style.display="none";
        overlay.style.display= "none";
        body.style.overflow = "auto";
        
    });
    //sampai sini//

    //untuk kunci lable supaya hanya bisa  di baca aja//
    const readInput = document.querySelectorAll('.PD-ProductRead') 
    const readSupplier= document.querySelectorAll('.PD-SupplierRead')

    readInput.forEach(function(input) {
         input.readOnly= true;
    });
    readSupplier.forEach(function(supplier){
        supplier.readOnly = true;
    });

    //plus button//

});//DOM content//

