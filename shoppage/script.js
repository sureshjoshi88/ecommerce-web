let button = document.getElementById("main-buton-shop")
button.addEventListener("click",()=>{
    function setdata(id,img,price){
        let cart = JSON.parse(localStorage.getItem("cart"))||[];
        let existing = cart.find(item=> item.id===id)
        if(existing){
            existing.quintity +=1
        }else{
            cart.push({id,img,price})
        }
        localStorage.setItem("cart",JSON.stringify(cart))
        alert("added succefull")
    }
    let imgs = document.getElementById("shop-img").src
    let product = document.getElementById("h5-shop").innerText
    setdata(1,imgs,product)
    getdata()

})
// console.log("hello");

function getdata(){
    let carts = JSON.parse(localStorage.getItem("cart"))||[];
    let main = document.getElementById("shop-tofle-div")
    main.innerHTML = "";
    carts.map((value,index)=>{
        console.log(value);
        
        let maindiv = document.createElement("div")
        maindiv.classList.add("d-flex","gap-4","align-items-center","p-2")

        let img = document.createElement("img")
        img.classList.add("w-25")
        img.src=  value.img;
        
        let products = document.createElement("h6")
        products.innerText = value.price;
       
        let delte = document.createElement("button")
        delte.classList.add("border","btn","btn-danger")
        delte.innerText = "X"
        delte.addEventListener("click",()=>{
        localStorage.removeItem("cart")  
        getdata();          
        })
        maindiv.appendChild(img)
        maindiv.appendChild(products)
        maindiv.appendChild(delte)
        main.appendChild(maindiv)

        
    })
}
getdata();


