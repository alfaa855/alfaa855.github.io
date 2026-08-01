document.addEventListener('DOMContentLoaded', function () {

   
    // untuk search exact di website nya //

//urutkan nama//
const productContainer = document.querySelector('.products')
const listContainer = document.querySelector('.list_check')


/*
//untuk sort dari HTML tanpa local storage//
const arrayProduct = Array.from(products)
arrayProduct.sort(function(productA, productB) {
    const nama1 = productA.querySelector('.productname').textContent.toLowerCase();
    const nama2 = productB.querySelector('.productname').textContent.toLowerCase();
    return nama1.localeCompare(nama2);
});
arrayProduct.forEach(function(item){
    productContainer.appendChild(item)
    console.log('sort by name succes')
});*/


//product detail//
const readBox = document.querySelector(".productDetail");
const PDoverlay = document.querySelector('.PD-overlay');
const allPDRead = document.querySelectorAll('.PD-ProductRead');
const PDsupplierRead = document.querySelectorAll('.PD-SupplierRead');
const PDorderInput = document.querySelectorAll('.PD-ProductOrder');
//body element//
const body = document.querySelector('body');
//save and cancel button spesialis cancel//
const PDsaveandcancel = document.querySelector('.PD-product-read-btn');
const PIsaveandcancel = document.querySelector('.PI-product-input-btn');
const PIcancel = document.querySelector('.PIcancel');
const PDcancel = document.querySelector('.PDcancel');
//save and cancel button spesialis save//
const PIsave = document.querySelector('.PIsave');
const PDsave = document.querySelector('.PDsave');
//Product Input//
const inputBox = document.querySelector('.productInput');
const allPIInput = document.querySelectorAll('.PI-ProductInput');
const PIsupplierInput = document.querySelectorAll('.PI-SupplierInput');
const PIoverlay = document.querySelector('.PI-overlay');
//input produknya//
const InputNama= document.getElementById('PI-product-name')
const InputCode = document.getElementById('PI-product-code')
const InputStok = document.getElementById('PI-product-stock')
const InputSupplier = document.getElementById('PI-product-supplier')
const InputModal =document.getElementById('PI-product-modal')
const InputGrosir = document.getElementById('PI-product-sell-level')
const InputPrice = document.getElementById('PI-product-sell-price')
//btn group//
const GrupBtn = document.querySelector('.btnGroup');
const GroupBTND = document.querySelector('.btnGroupDisplay');
const inputbtn = document.querySelector('.plus-btn');
const checkbtn  = document.querySelector('.checkBtn');
const Xbtn = document.querySelector('.in-cancelHam');
//in check button//
const copyBox = document.querySelector('.copyBox');
const backCopy = document.querySelector('.in-backbtn');
const grupMenu= document.querySelector('.in-CBgrupBtn');
const aftergrupMenu= document.querySelector('.after-in-CBgrupBtn');
const CBmenubox = document.querySelector('.CBmenuBox');
const CBhistory = document.querySelector('.CBhistory');
const CBsaveData = document.querySelector('.CBsaveData');
const CBcancelData = document.querySelector('.CBcancelData');
       
 


 //JSON mengambil data dari LS//
    const Storage_Key= 'List_Produk';
    let listProduct = JSON.parse(localStorage.getItem(Storage_Key)) || [];
    //validasi data, takut ksoong//
    
    //save buttonn berfungsi menyimpan//
    PIsave.addEventListener('click', function(saved){
        saved.preventDefault();
        allPIInput.forEach(function(read){
        read.readOnly = false;
        });
        //validasi data//
        const nama = InputNama.value.trim();
        const code = InputCode.value.trim();
        const stok = Number(InputStok.value);
        const supplier = InputSupplier.value.trim();
        const modal = Number(InputModal.value.trim());
        const grosir = Number(InputGrosir.value.trim());
        const jual = Number(InputPrice.value.trim());

        if(
        nama === ''||
        code ===''||
        stok === 0||
        supplier === ''||
        modal === 0||
        grosir === 0||
        jual === 0 
    ){
        alert('isi data dengan lengkap ya')
        console.log('data not accept')
        return;
    };
     
     //save mmengambil apa aja dari input//
        const produkBaru = {
        id : Date.now(),//biar ada id unik//
        nama : InputNama.value,
        code : InputCode.value,
        stok : Number(InputStok.value),
        supplier : InputSupplier.value,
        modal : Number(InputModal.value),
        hargaGrosir : Number(InputGrosir.value),
        hargaJual : Number(InputPrice.value),
        };

        listProduct.push(produkBaru);
        localStorage.setItem(Storage_Key, JSON.stringify(listProduct));
        alert('produk berhasil disimpan');
        allPIInput.forEach(function(clear){
        clear.value = "";
        });
        PIsupplierInput.forEach(function(clear){
        clear.value = "";    
        });
        console.log('program save berhasil')
        renderFromLS();
    });
    //merender data dari Local Storage ke Tampilan website//
    function renderFromLS(){
        productContainer.innerHTML = '';
        //sort//
        listProduct.sort(function(a, b){
            console.log('sorted')
            return a.nama.localeCompare(b.nama)
        });
        listProduct.forEach(function(item){
            const listCards = document.createElement('div')
            listCards.className = 'product';
            listCards.dataset.id = item.id;
            listCards.innerHTML= `
            <h3 class="productname">${item.nama}</h3>
            <p class="productcode">${item.code}</p>
            <p class="productstock">${item.stok}</p>
            `
            productContainer.appendChild(listCards);
            console.log('from ls active')
        });
        const products = document.querySelectorAll('.product')
products.forEach(function(product){
    product.addEventListener("click", function(){
        //ambiil id unik dari kartu//
        const productId = Number(product.dataset.id);
        const targetProduct= listProduct.find(item => item.id === productId);

        if(targetProduct) {
            readBox.dataset.activeId = targetProduct.id;
            document.getElementById('PD-product-name').value = targetProduct.nama;
            document.getElementById('PD-product-code').value = targetProduct.code;
            document.getElementById('PD-product-stock').value = targetProduct.stok;
            document.getElementById('PD-product-supplier').value = targetProduct.supplier;
            document.getElementById('PD-product-modal').value = targetProduct.modal;
            document.getElementById('PD-product-sell-level').value = targetProduct.hargaGrosir;
            document.getElementById('PD-product-sell-price').value = targetProduct.hargaJual;
        }
        console.log('data berhasil di tampilkan')

            readBox.style.display = "flex";
            PDsaveandcancel.style.display ="flex";
            PDoverlay.style.display = "block";
            body.style.overflow= "hidden";
            inputBox.style.display ="none";
            resetHamBtn();
         allPDRead.forEach(function(read) {
         read.readOnly= true;
         });
         PDsupplierRead.forEach(function(supplier){
         supplier.readOnly = true;
         });
         console.log('user click list');

         });
        });
    };
    //sampai sini//
    renderFromLS();

    //search//
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input',function(){
        const filterText = searchInput.value.toLowerCase().trim();
        const products = document.querySelectorAll('.product')
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
        console.log('search aktif')
    });
});
// sampai sini//

    
// sampai sini//
   
function resetHamBtn(){
    GrupBtn.style.display ="flex";
    GroupBTND.style.display ="none";
    inputbtn.style.display ="none";
    checkbtn.style.display ="none";
    Xbtn.style.display ="none";
    console.log('resetHamAktif')
}
function onHamBtn(){
    GrupBtn.style.display ="none";
    GroupBTND.style.display ="flex";
    inputbtn.style.display ="flex";
    checkbtn.style.display ='flex';
    Xbtn.style.display ="flex";
    console.log('onHamBTN aktif')
}

function OnCBmenuBox(){
    CBmenubox.style.display= "flex";
    console.log('CBmenuBox On')
}
function OffCBmenuBox(){
    CBmenubox.style.display= "none";
    console.log('CBmenubox off')
}

    //PD cancel button//
    PDcancel.addEventListener("click", function(){
        readBox.style.display= "none";
        PDsaveandcancel.style.display="none";
        PDoverlay.style.display= "none";
        body.style.overflow = "auto";
        allPDRead.forEach(function(read){
        read.readOnly = true;
        console.log('user cancel PD')
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
        PIoverlay.style.display= "none";
        body.style.overflow = "auto";
        allPIInput.forEach(function(read){
        read.readOnly = false;
        console.log('user cancel Input')
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
    //sampai sini// 
    //grup btn//
    GrupBtn.addEventListener("click", function(){
        onHamBtn();
    });
    //cancel btn grup//
    Xbtn.addEventListener("click", function(){
        resetHamBtn();
    });
    //Input button//
inputbtn.onclick = () =>{
    inputBox.style.display = "flex";
    PIoverlay.style.display = "block";
    PIsaveandcancel.style.display = "flex";
    body.style.overflow = "hidden";
    resetHamBtn();
    console.log('userInput')
};
//sampai sini//
//check button//
checkbtn.onclick =()=> {
    resetHamBtn();
    copyBox.style.display = "flex";
    body.style.overflow="hidden";
    console.log('checkBTN active');
}
grupMenu.onclick = ()=>{
    OnCBmenuBox();
    grupMenu.style.display= "none";
    aftergrupMenu.style.display = "flex";
}
aftergrupMenu.onclick = ()=>{
    OffCBmenuBox();
    grupMenu.style.display= "flex";
    aftergrupMenu.style.display = "none";
}
//back btn//
backCopy.onclick =() =>{
    copyBox.style.display = "none";
    body.style.overflow= "auto";
    OffCBmenuBox();
}
//anti zoom di hp//
document.addEventListener('touchmove',function (event) {
    if (event.touches.length > 1 ){
        event.preventDefault()
        console.log('antiHPzoomActive')
    }
}, { passive:false});

let doubleTap = 0 ;
document.addEventListener('touchend', function(zoom){
    const now = (new Date()).getTime();
    if(now - doubleTap <= 100){
        zoom.preventDefault();
        console.log('antiDBHPzoomActive')
    };
     doubleTap = now
    }, false);
    //sampe sini//
    //anti zoom di PC//
    document.addEventListener('wheel', function(wheelEvent){
        if (wheelEvent.ctrlKey){
            wheelEvent.preventDefault();
            console.log('antiPCzoomActive')
        };
    }, {passive: false});

});//DOM content//

