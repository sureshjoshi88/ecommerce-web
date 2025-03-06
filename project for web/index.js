

function isuserauthicated(){
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
        body[0].style.overflowY="scroll"
    // }else{
    //     window.location.href="/sign-in-pages/signin.html"
    //     console.log(result.error.explanation);
    // }
  })
  .catch((error) => console.log(error));
}
isuserauthicated();


let data = [
  {
    images:"imgages/image 1.png",
    brand:"Syltherine",
    caterogy:"Stylish cafe chair",
    discountprice:"2.500.000",
    totalprice:"3.500.000",
    discountpersent:"-30%"
  },
  {
    images:"imgages/image 2.png",
    brand:"Leviosa",
    caterogy:"Stylish cafe chair",
    discountprice:"2.500000",
  },
  {
    images:"imgages/Images.png",
    brand:"Lolito",
    caterogy:"Luxury big sofa",
    discountprice:"Rp 7.000.000",
    totalprice:"14.000.000",
    discountpersent:"-50%"

  },
  {
    images:"imgages/image 4.png",
    brand:"Syltherine",
    caterogy:"Stylish cafe chair",
    discountprice:"2.500000",
    totalprice:"3.500000",
    discountpersent:"New"

  },
  {
    images:"imgages/image 101.png",
    brand:"Grifo",
    caterogy:"Night lamp",
    discountprice:"1.500.000",
    discountpersent:"New"
  },
  {
    images:"imgages/Images (2).png",
    brand:"Muggo",
    caterogy:"Small mug",
    discountprice: "150.000",
    discountpersent:"New"

  },
  {
    images:"imgages/image 7.png",
    brand:"Pingky",
    caterogy:"Cute bed set",
    discountprice:"7.000.000",
    totalprice:"14.000.000",
    discountpersent:"-50%"

  },
  {
    images:"imgages/image 8.png",
    brand:"Potty",
    caterogy:"Minimalist flower pot",
    discountprice:"500.000",
    discountpersent:"New"
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

function homeproducts(){

  setTimeout(() => {
    let mainrow = document.getElementById("loder-row")
    mainrow.innerHTML = " "
    
    data.map((value,key)=>{
      let mainrow = document.getElementById("loder-row")
      mainrow.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-3 mt-3">
               <a href="/single pruducts/products.html" class="main-for-anker-tag"> <div class="main-for-cart">
                <div class="position-relative h-100">
                  <img width="100%" class="imgahes-div-js" src="${value.images}" alt="">
                   <div class="abs-div-img">
                  <p class="pt-3">${value.discountpersent?value.discountpersent:" "}</p>
                </div>
                </div>
               <div class="ps-2">
                <h5 class="pt-2">${value.brand}</h5>
                <p class="opacity-75">${value.caterogy}</p>
                <div class="d-flex gap-2 align-items-center img-detailes">
                  <p class="fw-bolder">${value.discountprice}</p>
                  <p class="opacity-75 linethrow">${value.totalprice?value.totalprice:" "}</p>
                </div>
               </div>
                <div class="abs-for-blur-child">
                 <div class="mt-5 pt-5">
                  <div class="mt-5">
                    <button class="btn btn-light ps-4 pe-4 ms-3 text-warning">Add to cart</button>
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
              </div></a>
              </div>
      `
    })
  }, 2000);
}
homeproducts();