let button = document.getElementById("main-buton-shop")
button.addEventListener("click",()=>{
    function setdata(id,img,price,buton){
        let cart = JSON.parse(localStorage.getItem("cart"))||[];
        let existing = cart.find(item=> item.id===id)
        if(existing){
            existing.quintity +=1
        }else{
            cart.push({id,img,price,buton})
        }
        localStorage.setItem("cart",JSON.stringify(cart))
    }
    let imgs = document.getElementById("shop-img")
    console.log(imgs.src)
    let product = document.getElementById("h5-shop");
    
})
// console.log("hello");
