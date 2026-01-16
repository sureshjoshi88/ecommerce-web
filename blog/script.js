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
        img.alt = "image"
  
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
  