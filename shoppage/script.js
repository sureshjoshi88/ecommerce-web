let data = [
    {
        id: 1,
        images: "imgae-for-shop/image 1.png",
        brand: "Syltherine",
        caterogy: "Stylish cafe chair",
        discountprice: "2.500.000",
        totalprice: "3.500.000",
        discountpersent: "-30%"
    },
    {
        id: 2,
        images: "imgae-for-shop/image 2.png",
        brand: "Leviosa",
        caterogy: "Stylish cafe chair",
        discountprice: "2.500000",
        discountpersent: "New"

    },
    {
        id: 3,
        images: "imgae-for-shop/Images.png",
        brand: "Lolito",
        caterogy: "Luxury big sofa",
        discountprice: "Rp 7.000.000",
        totalprice: "14.000.000",
        discountpersent: "-50%"

    },
    {
        id: 4,
        images: "imgae-for-shop/image 4.png",
        brand: "Syltherine",
        caterogy: "Stylish cafe chair",
        discountprice: "2.500000",
        totalprice: "3.500000",
        discountpersent: "New"

    },
    {
        id: 5,
        images: "imgae-for-shop/image 101.png",
        brand: "Grifo",
        caterogy: "Night lamp",
        discountprice: "1.500.000",
        discountpersent: "New"
    }
]

let button = document.getElementById("main-buton-shop")
button.addEventListener("click", () => {
    function setdata(id, img, price, price2) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let existing = cart.find(item => item.id === id)
        if (existing) {
            existing.quintity += 1
        } else {
            cart.push({ id, img, price, price2 })
        }
        localStorage.setItem("cart", JSON.stringify(cart))
        alert("added succefull")
    }
    // let imgs = document.getElementById("shop-img").src
    // let product = document.getElementById("h5-shop").innerText
    // let product2 = document.getElementById("price-shop").
    data.map((value, index) => {
        setdata(value.id,value.images,value. brand,value.discountprice)
    })
    getdata()

})
// console.log("hello");

function getdata() {
    let carts = JSON.parse(localStorage.getItem("cart")) || [];
    let main = document.getElementById("shop-tofle-div")
    main.innerHTML = "";
    carts.map((value, index) => {
            console.log(value);
            
        let maindiv = document.createElement("div")
        maindiv.classList.add("d-flex", "gap-5", "align-items-center", "p-2")
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
        delte.addEventListener("click", (e) => {
            // console.log(e.id);
            let ids = e.target.parentElement
            // console.log(ids);
            // localStorage.removeItem("cart")
            

            
            
            getdata();
        })
        maindiv.appendChild(img)
        maindiv.appendChild(childiv)
        maindiv.appendChild(delte)
        main.appendChild(maindiv)


    })
}
getdata();


