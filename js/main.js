// open cart modal
const cart = document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.cart-modal-overlay');


const cart_btn=document.getElementById("cart-btn");

cart_btn.addEventListener('click',()=>{
    cartModalOverlay.style.transform = 'translateX(0)';
});

// cart.addEventListener('click', () => {
//   if (cartModalOverlay.style.transform === 'translateX(-200%)'){
//     cartModalOverlay.style.transform = 'translateX(0)';
//   } else {
//     cartModalOverlay.style.transform = 'translateX(-200%)';
//   }
// })
// end of open cart modal

// close cart modal
const closeBtn = document.querySelector ('#close-btn');

closeBtn.addEventListener('click', () => {
  cartModalOverlay.style.transform = 'translateX(200%)';
});

// cartModalOverlay.addEventListener('click', (e) => {
//   if (e.target.classList.contains('cart-modal-overlay')){
//     cartModalOverlay.style.transform = 'translateX(-200%)'
//   }
// })
// end of close cart modal










//alert user if cart is empty
/*************************************************** */

let products;



function loadData() {
    $.ajax({

        url:'productsData.json',

        success: function (data) {

            products = data;
 
            for(let i=0; i<data.length;i++){

                $("#allData").append(`
                
            <div class="col-lg-3 col-md-4 col-sm-6">
         
            <div class="mainbox">
             <div class="fullbox">
             <span> <i class="far fa-heart"></i></span>

            <img src="${data[i].imgUrl}">
            <div class="nameproduct">${data[i].name}</div>
         
            <div class="filladdtocart">

            <span class="price"> EGP ${data[i].price}</span>
            
            <button onclick="addtoCart(${data[i].id}, this);" type="button" class="btn btn-outline-danger addtocart">Add to cart
           
            <span class="numcart" id="numcart">0</span>


             </button>
             </div>
            </div>
             </div>
          
             </div>
                
                `)

            }
        }
    })
}
    loadData();


    let arr = [];


    function addtoCart(id) {

    arr.push(id);
    localStorage.setItem('usercart', JSON.stringify(arr) );
  
    let items =(JSON.parse(localStorage.getItem('usercart')));
    
    $('#cart').html(items.length);
    
    // console.log(items.length);


    
    }


    let choosen_products =[];
    function getCartItems() {
   
    let items  =(JSON.parse(localStorage.getItem('usercart')));

    for (let i = 0; i < items.length; i++) {

        // console.log(items[i]);    

     choosen_products.push(products.find((products)=> products.id == items[i]))
     
    //  console.log(choosen_products);    

    }
    
    addCartItemsToDom(choosen_products);

    //getproductDetail(choosen_products);


    $('#cart').html(choosen_products.length);


    }



    

    function addCartItemsToDom(items){
     
        $("#cart_data").html('');

       for(let i=0; i<items.length; i++){
        
            $("#cart_data").append(`
           
            <div class="col-lg-12">
            
          
            <div class="mainbox">
             <div class="fullbox">
                <div class="row">
                <div class="col-md-6">
            <img src="${items[i].imgUrl}" onclick=getItemId(${items[i].id})>
            </a>
            </div>
            <div class="col-md-6">
            <div class="nameproduct">${items[i].name}</div>
            <div class="filladdtocart">

            <span class="price"> EGP ${items[i].price}</span>
            </div>

            </div>
             </button>
             </div>
            </div>
            
            
            
             </div>
             </div>
                
                `)

            }




    }

   

    // function getItemId(id){
    //     console.log("id is "+id);
        
    //     for (var i = 0; i < localStorage.length; i++){
    //         var key = localStorage.getItem(localStorage.key(i));
            
    //         if(key[1] == id){ 
    //             window.location.href = "productDetails.html";
    //             localStorage.setItem('productID', i);
    //         }
    //         else{
    //             console.log("id not found");
    //         }
    //     }
    // }
    

     function getproductDetail(choosen_products){
        let id=localStorage.getItem('productID');
        console.log("get item id = " + id);
        console.log(choosen_products[1].imgUrl)

        //let items=(JSON.parse(localStorage.getItem('usercart')));
            for(let i=0;i<choosen_products.length;i++){

                console.log("item id "+ choosen_products[i].id);
                console.log(choosen_products[i].imgUrl);

                if(choosen_products[i].id == id){ 
                    console.log(choosen_products[i].imgUrl)
                    $("#product-detail").append(`
                
                    <div class="col-lg-12">
                    <a href="productDetails.html">
                    <div class="mainbox">
                    <div class="fullbox">
                    <span> <i class="far fa-heart"></i></span>

                    <img src="${choosen_products[i].imgUrl}">
                    <div class="nameproduct">${choosen_products[i].name}</div>
                    <div class="filladdtocart">

                    <span class="price"> EGP ${choosen_products[i].price}</span>
                    </button>
                    </div>
                    </div>      
                    </div>
                    </a>
                    </div>
                
                    `)
                }
                else{
                    console.log("item not found")
                }
                
            }
            
             

            }
        
    if (window.location.href.match('productDetails.html') != null) {
        
        
        getproductDetail(choosen_products);
    }  
    

