$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})

//Hamburger line//

const klik = document.getElementById("hamb")
const x = document.getElementById("btn")

  klik.addEventListener("click",openNav)
function openNav() {
    document.getElementById("myNav").style.display = "inline-block";
  }
  x.addEventListener("click",closeNav)
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
    console.log("clicked")
  }


//Basket line//
const localStorage = window.localStorage;
const cartSelector = document.getElementsByClassName("cart");
// const deleteButton = document.getElementsByClassName("delete");

loadEventListeners();

function loadEventListeners(){
    window.addEventListener("load",function(){
       let carts = GetAllCartsFromStorage();
       document.getElementById('cart-count').innerText=carts.length;

       let pg = window.location.pathname;
       if(pg == '/basketpage.html'){
           AddCartsToBasketPage();
       }


      for(let i=0; i<cartSelector.length; i++) cartSelector[i].addEventListener("click", addNewCart);
    })
}

function addNewCart(e){
  let id = e.target.name;
  let price = parseInt(document.getElementById('p-price-1').innerText.split('$')[0]);
  let count = parseInt(document.getElementById('p-count-1').value);

  let cart = {
      productName: document.getElementById('product-1').innerText,
      productPrice: price,
      productCount:count,
      totalPrice: price * count
  }
  console.log("clicked")

  AddCartsToStorage(cart);
  Alert();
}

function GetAllCartsFromStorage(){
        let carts;
        if(localStorage.getItem("carts") === null){
            carts = [];
        }
        else{
           carts = JSON.parse(localStorage.getItem("carts"));
        }
        return carts;
}

function AddCartsToStorage(item){
    let carts = GetAllCartsFromStorage();
    carts.push(item);
    localStorage.setItem("carts",JSON.stringify(carts));

    document.getElementById('cart-count').innerText=carts.length;
}
//helelik islemir
// function DeleteAllCartsFromStorage(id){
//     let carts = GetAllCartsFromStorage();
//     carts.splice("id",1)
//     localStorage.setItem("carts",JSON.stringify(carts));
// }

function Alert(){
    $('#success-alert').show();

    setTimeout(function(){
      $('#success-alert').hide();
    },2000)
}

function GetDetailPage(){
    window.location.href = '/basketpage.html'
}

function GetShoppingCartPage(){
    window.location.href = '/index.html'
}

function AddCartsToBasketPage(){
    let html = "";
    let carts = GetAllCartsFromStorage();

    for(let i =0 ; i< carts.length; i++){
        html += '<tr>'+
        '<td>'+carts[i].productName + '</td>'+
        '<td>'+carts[i].productPrice + '</td>'+
        '<td>'+carts[i].productCount + '</td>'+
        '<td>'+carts[i].totalPrice + '</td>'+
        '</tr>';
        document.write("isledi")
        document.getElementById('cart-detail').innerHTML = html;

    }
}