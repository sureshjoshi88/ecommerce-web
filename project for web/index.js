

function isuserauthicated() {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer sa d,jnsaudsbsaxudnfbdmbcudfcia,bufvdkshkaihfbjdudshfkjdsfkdsakdsakmxidahfufdjf");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  fetch("https://admin-dev-backend.edvice.in/ping", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // if(result.success){
      let body = document.getElementsByTagName("body")
      body[0].children[0].remove();
      body[0].style.overflowY = "scroll"
      // }else{
      //     window.location.href="/sign-in-pages/signin.html"
      //     console.log(result.error.explanation);
      // }
    })
    .catch((error) => {
      console.error(error)

    });
}
isuserauthicated();


let data = [
  {
    id:1,
    images: "imgages/image 1.png",
    brand: "Syltherine",
    caterogy: "Stylish cafe chair",
    discountprice: "2.500.000",
    totalprice: "3.500.000",
    discountpersent: "-30%"
  },
  {
    id:2,
    images: "imgages/image 2.png",
    brand: "Leviosa",
    caterogy: "Stylish cafe chair",
    discountprice: "2.500000",
    discountpersent: "New"

  },
  {
    id:3,
    images: "imgages/Images.png",
    brand: "Lolito",
    caterogy: "Luxury big sofa",
    discountprice: "Rp 7.000.000",
    totalprice: "14.000.000",
    discountpersent: "-50%"

  },
  {
    id:4,
    images: "imgages/image 4.png",
    brand: "Syltherine",
    caterogy: "Stylish cafe chair",
    discountprice: "2.500000",
    totalprice: "3.500000",
    discountpersent: "New"

  },
  {
    id:5,
    images: "imgages/image 101.png",
    brand: "Grifo",
    caterogy: "Night lamp",
    discountprice: "1.500.000",
    discountpersent: "New"
  },
  {
    id:6,
    images: "imgages/Images (2).png",
    brand: "Muggo",
    caterogy: "Small mug",
    discountprice: "150.000",
    discountpersent: "New"

  },
  {
    id:7,
    images: "imgages/image 7.png",
    brand: "Pingky",
    caterogy: "Cute bed set",
    discountprice: "7.000.000",
    totalprice: "14.000.000",
    discountpersent: "-50%"

  },
  {
    id:8,
    images: "imgages/image 8.png",
    brand: "Potty",
    caterogy: "Minimalist flower pot",
    discountprice: "500.000",
    discountpersent: "New"
  }

]

// function addproducts(img,brands,caterogys,totprice,disprice){
//   let mainrow = document.getElementById("loder-row");
//   let maindiv = document.createElement("div")
//   maindiv.classList.add("col-sm-12","col-md-6", "col-lg-3", "mt-3")

//   let childdiv = document.createElement("div")

//   let images = document.createElement("img")
//   images.src = img
//   images.classList.add("w-100")
//   childdiv.appendChild(images)

//   let brand = document.createElement("h5")
//   brand.innerText = brands
//   childdiv.appendChild(brand)

//   let categroy = document.createElement("p")
//   categroy.innerText = caterogys
//   childdiv.appendChild(categroy)

//   let discountprice = document.createElement("h6")
//   discountprice.innerText = totprice
//   childdiv.appendChild(discountprice)

//   let totalprice = document.createElement("p")
//   totalprice.innerText = disprice
//   totalprice.style.textDecoration="line-through"
//   childdiv.appendChild(totalprice)

//   maindiv.appendChild(childdiv)
//   mainrow.appendChild(maindiv)
// }

function homeproducts() {
  setTimeout(() => {
    let mainrow = document.getElementById("loder-row")
    mainrow.innerHTML = " "

    data.map((value, key) => {
      let mainrow = document.getElementById("loder-row")
      mainrow.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-3 mt-3 ">
              <div class="p-1">
               <div class="main-for-anker-tag">
                <div class="main-for-cart">
                <div class="position-relative h-100">
                  <img width="100%" class="imgahes-div-js" src="${value.images}" alt="">
                   <div class="abs-div-img">
                  <p class="pt-3">${value.discountpersent ? value.discountpersent : " "}</p>
                </div>
                </div>
               <div class="ps-2">
                <h5 class="pt-2">${value.brand}</h5>
                <p class="opacity-75">${value.caterogy}</p>
                <div class="d-flex gap-2 align-items-center img-detailes">
                  <p class="fw-bolder">${value.discountprice}</p>
                  <p class="opacity-75 linethrow">${value.totalprice ? value.totalprice : " "}</p>
                </div>
               </div>
                <div class="abs-for-blur-child">
                 <div class="mt-5 pt-5">
                  <div class="mt-5" id=${value.id}>
                    <button class="btn btn-light ps-4 pe-4 ms-3 text-warning main-buton-1">Add to cart</button>
                    <div class="d-flex  align-items-center gap-3">
                      <div class="d-flex align-items-center gap-1 ms-2">
                        <i class="fa-solid fa-share-nodes" style="color: #f5f5f5;"></i>
                        <p class="text-light pt-3">Share</p>
                      </div>
                      <div class="d-flex align-items-center gap-1">
                        <i class="fa-solid fa-code-compare" style="color: #ffffff;"></i>
                          <p class="text-light pt-3">compare</p>
                      </div>
                      <div class="d-flex align-items-center gap-1">
                        <i class="fa-regular fa-heart" style="color: #ffffff;"></i>
                            <p class="text-light pt-3">Like</p>
                      </div>
                    </div>
                  </div>
                 </div>
                </div>
              </div>
              </div>
              </div>
              </div>
      `
    });
  }, 2000);
}
homeproducts();

function mainfunction(){
    document.getElementById("loder-row").addEventListener("click",(e)=>{
      if (e.target.classList.contains("main-buton-1")) {
        let ide = e.target.parentElement.id;
        let imgs = e.target.parentElement.parentElement.parentElement.parentElement.children[0].children[0].src;
        let brand = e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[0].innerText
        let prices = e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[2].children[0].innerText 
        setdata(ide,imgs,brand,prices)
        getdata();
    function setdata(id,img,price,price2){
    let cart = JSON.parse(localStorage.getItem("cart"))||[];
     let existing = cart.find(item => item.id === id)
                if (existing) {

                    existing.quintity += 1
                    Toastify({
                        text: "products is already added",
                        duration: 3000,
                        destination: "https://github.com/apvarun/toastify-js",
                        newWindow: true,
                        close: true,
                        gravity: "top",
                        position: "left",
                        stopOnFocus: true,
                        style: {
                            background: "yellow",
                            color: "green"
                        },
                        onClick: function () { }
                    }).showToast();
                }else {
                  cart.push({ id, img, price, price2 })
                  Toastify({
                      text: price + " added succefull",
                      duration: 3000,
                      destination: "https://github.com/apvarun/toastify-js",
                      newWindow: true,
                      close: true,
                      gravity: "top",
                      position: "left",
                      stopOnFocus: true,
                      style: {
                          background: "linear-gradient(to right, #00b09b, #96c93d)",
                      },
                      onClick: function () { }
                  }).showToast();
                  localStorage.setItem("cart", JSON.stringify(cart))
              }

    }
   
  }
  })

function getdata() {
  let carts = JSON.parse(localStorage.getItem("cart")) || [];
  let main = document.getElementById("shop-tofle-div")
  main.innerHTML = "";
  let totalprice = 0;
  carts.map((value, index) => {

      let maindiv = document.createElement("div")
      maindiv.classList.add("d-flex", "justify-content-between", "align-items-center", "p-2")
      maindiv.id = value.id

      let img = document.createElement("img")
      img.classList.add("w-25")
      img.src = value.img;

      let childiv = document.createElement("div")
      let products = document.createElement("h6")
      products.innerText = value.price;
      let products1 = document.createElement("h6")
      products1.innerText = value.price2;
      products1.classList.add("setcolor");
      childiv.appendChild(products)
      childiv.appendChild(products1)

      let delte = document.createElement("button")
      delte.classList.add("border", "btn", "btn-danger")
      delte.innerText = "X"
      delte.addEventListener("click", () => {
          removeItem(value.id)
          getdata();
          Toastify({
              text: value.price + " deleted successfully",
              duration: 3000,
              destination: "https://github.com/apvarun/toastify-js",
              newWindow: true,
              close: true,
              gravity: "top",
              position: "left",
              stopOnFocus: true,
              style: {
                  background: "red",
              },
              onClick: function () { }
          }).showToast();
      })

      let priceText = value.price2 || "0";
      let numericPrice = parseInt(priceText.replace(/[^\d]/g, ""));

      if (!isNaN(numericPrice)) {
          totalprice += numericPrice;
      }
      maindiv.appendChild(img)
      maindiv.appendChild(childiv)
      maindiv.appendChild(delte)
      main.appendChild(maindiv)
  })
  let totalmain = document.createElement("div")
  totalmain.classList.add("d-flex", "p-2", "justify-content-between", "mt-4")
  let totalName = document.createElement("h6")
  totalName.innerText = "Subtotal"
  let totalPrice = document.createElement("h6")
  totalPrice.classList.add("setcolor")
  totalPrice.innerText = totalprice.toLocaleString();
  totalmain.appendChild(totalName)
  totalmain.appendChild(totalPrice)
  main.appendChild(totalmain)

}
function removeItem(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((value) => value.id != id)
  localStorage.setItem("cart", JSON.stringify(cart))
}
getdata();
} 

mainfunction();

  

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main-body'),
  smooth: true
});




let navbtn = document.getElementById("flexSwitchCheckDefault")
function mybtn(){

  if(document.body.style.backgroundColor === "white" || document.body.style.backgroundColor === ""){
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
    console.log("clck");
  }else{
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
    
  }
  
}
