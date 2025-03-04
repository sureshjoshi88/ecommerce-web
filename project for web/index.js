

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
  }
]

function addproducts(){
  let mainrow = document.getElementById("loder-row");
  let childdiv = document.createElement("div")

  let images = document.createElement("img")
  images.src = "imgages/image 1.png"
  childdiv.appendChild(images)

  let brand = document.createElement("h5")
  brand.innerText="sadiu"
  childdiv.appendChild(brand)

  let categroy = document.createElement("p")
  categroy.innerText = "sjids"
  childdiv.appendChild(categroy)
  
  let discountprice = document.createElement("h6")
  discountprice.innerText = "987654"
  childdiv.appendChild(discountprice)

  let totalprice = document.createElement("p")
  totalprice.innerText = "87898787"
  totalprice.style.textDecoration="linethrow"
  childdiv.appendChild(totalprice)
  mainrow.appendChild(childdiv)
}
addproducts();