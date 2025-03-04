

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
  .catch((error) => console.error(error));
}
isuserauthicated();


let data = [
  {
    images:"imgages/image 1.png",
    brand:"Syltherine",
    caterogy:"Stylish cafe chair",
    discountprice:2.500000,
    totalprice:3.500000
  },
  {
    images:"imgages/image 1.png",
    brand:"Syltherine",
    caterogy:"Stylish cafe chair",
    discountprice:2.500000,
    totalprice:3.500000
  },
  {
    images:"imgages/image 1.png",
    brand:"Syltherine",
    caterogy:"Stylish cafe chair",
    discountprice:2.500000,
    totalprice:3.500000
  },
  {
    images:"imgages/image 1.png",
    brand:"Syltherine",
    caterogy:"Stylish cafe chair",
    discountprice:2.500000,
    totalprice:3.500000
  },
  {
    images:"imgages/image 1.png",
    brand:"Syltherine",
    caterogy:"Stylish cafe chair",
    discountprice:2.500000,
    totalprice:3.500000
  },
  {
    images:"imgages/image 1.png",
    brand:"Syltherine",
    caterogy:"Stylish cafe chair",
    discountprice:2.500000,
    totalprice:3.500000
  },
  {
    images:"imgages/image 1.png",
    brand:"Syltherine",
    caterogy:"Stylish cafe chair",
    discountprice:2.500000,
    totalprice:3.500000
  },
  {
    images:"imgages/image 1.png",
    brand:"Syltherine",
    caterogy:"Stylish cafe chair",
    discountprice:2.500000,
    totalprice:3.500000
  },
  {
    images:"imgages/image 1.png",
    brand:"Syltherine",
    caterogy:"Stylish cafe chair",
    discountprice:2.500000,
    totalprice:3.500000
  },
  {
    images:"imgages/image 1.png",
    brand:"Syltherine",
    caterogy:"Stylish cafe chair",
    discountprice:2.500000,
    totalprice:3.500000
  }
]

function addproducts(img,brands,caterogys,totprice,disprice){
  let mainrow = document.getElementById("loder-row");
  let childdiv = document.createElement("div")
  childdiv.classList.add("col-sm-12"," col-md-6", "col-lg-3", "mt-3")

  let images = document.createElement("img")
  images.src = img
  childdiv.appendChild(images)

  let brand = document.createElement("h5")
  brand.innerText = brands
  childdiv.appendChild(brand)

  let categroy = document.createElement("p")
  categroy.innerText = caterogys
  childdiv.appendChild(categroy)
  
  let discountprice = document.createElement("h6")
  discountprice.innerText = totprice
  childdiv.appendChild(discountprice)

  let totalprice = document.createElement("p")
  totalprice.innerText = disprice
  totalprice.style.textDecoration="line-through"
  childdiv.appendChild(totalprice)
  mainrow.appendChild(childdiv)
}

data.map((value,key)=>{
  addproducts(value.images,value.brand,value.caterogy,value.discountprice,value.totalprice);
})