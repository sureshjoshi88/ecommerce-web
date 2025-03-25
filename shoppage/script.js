// let data = [
//     {
//         id: 1,
//         images: "imgae-for-shop/image 1.png",
//         brand: "Syltherine",
//         caterogy: "Stylish cafe chair",
//         discountprice: "2.500.000",
//         totalprice: "3.500.000",
//         discountpersent: "-30%"
//     },
//     {
//         id: 2,
//         images: "imgae-for-shop/image 2.png",
//         brand: "Leviosa",
//         caterogy: "Stylish cafe chair",
//         discountprice: "2.500000",
//         discountpersent: "New"

//     },
//     {
//         id: 3,
//         images: "imgae-for-shop/Images.png",
//         brand: "Lolito",
//         caterogy: "Luxury big sofa",
//         discountprice: "Rp 7.000.000",
//         totalprice: "14.000.000",
//         discountpersent: "-50%"

//     },
//     // {
//     //     id: 4,
//     //     images: "imgae-for-shop/image 4.png",
//     //     brand: "Syltherine",
//     //     caterogy: "Stylish cafe chair",
//     //     discountprice: "2.500000",
//     //     totalprice: "3.500000",
//     //     discountpersent: "New"

//     // },
//     // {
//     //     id: 5,
//     //     images: "imgae-for-shop/image 101.png",
//     //     brand: "Grifo",
//     //     caterogy: "Night lamp",
//     //     discountprice: "1.500.000",
//     //     discountpersent: "New"
//     // }
// ]
// let main_button = document.getElementById("main-buton-shop-1")
// main_button.addEventListener("click",(e)=>{
//     let parent = e.target.parentElement.parentElement.parentElement.parentElement.children[0].children[0].src
//     // console.log(parent);
//     let parent1 =  e.target.parentElement.parentElement.parentElement.parentElement.children[0].children[1].children[0]
//     // console.log(parent1);
//     let parent2 = e.target.parentElement.parentElement.parentElement.parentElement.children[0].children[1].children[2].children[0]

//     console.log(parent2);


// })
function mainfunction() {

    let button = document.querySelectorAll(".main-buton-shop-1")
    button.forEach((button) => {

        button.addEventListener("click", (e) => {
            function setdata(id, img, price, price2) {
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                let existing = cart.find(item => item.id === id)
                if (existing) {
                    existing.quintity += 1
                    Toastify({
                        text: "products is already added",
                        duration: 3000,
                        destination: "https://github.com/apvarun/toastify-js",
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "left", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                          background: "yellow",
                          color: "green"
                        },
                        onClick: function(){} // Callback after click
                      }).showToast();
                } else {
                    cart.push({ id, img, price, price2 })
                    // alert(price + "  added succefull")
                    Toastify({
                        text: price +" added succefull",
                        duration: 3000,
                        destination: "https://github.com/apvarun/toastify-js",
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "left", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                          background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                        onClick: function(){} // Callback after click
                      }).showToast();
                }
                localStorage.setItem("cart", JSON.stringify(cart))
               
            }
            // let imgs = document.getElementById("shop-img").src
            // let product = document.getElementById("h5-shop").innerText
            // let product2 = document.getElementById("price-shop").
            let parent = e.target.parentElement.parentElement.parentElement.parentElement.children[0].children[0].children[0].src
            // console.log(parent);

            let parent1 = e.target.parentElement.parentElement.parentElement.parentElement.children[0].children[1].children[0].innerText
            let parent2 = e.target.parentElement.parentElement.parentElement.parentElement.children[0].children[1].children[2].children[0].innerText
            // console.log(parent2);

            let parent3 = e.target.parentElement.id
            // console.log(parent3);

            setdata(parent3, parent, parent1, parent2)
            // data.map((value, index) => {
            //     setdata(value.id,value.images,value. brand,value.discountprice)
            // })
            getdata()

        })
    })

    function getdata() {
        let carts = JSON.parse(localStorage.getItem("cart")) || [];
        console.log(carts);

        let main = document.getElementById("shop-tofle-div")
        main.innerHTML = "";
        let totalprice = 0;
        carts.map((value, index) => {
            // console.log(value);

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
                alert(value.price + "deleted successfully")
            })

            // console.log(finalPrice);
            let priceText = value.price2 || "0"; // agar price undefined ho to "0" use karein
            let numericPrice = parseInt(priceText.replace(/[^\d]/g, "")); // 🔹 Remove dots, letters & convert to number

            if (!isNaN(numericPrice)) {
                totalprice += numericPrice;
            }
            maindiv.appendChild(img)
            maindiv.appendChild(childiv)
            maindiv.appendChild(delte)
            main.appendChild(maindiv)
        })
        let totalmain = document.createElement("div")
        totalmain.classList.add("d-flex", "p-2", "justify-content-between","mt-4")
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