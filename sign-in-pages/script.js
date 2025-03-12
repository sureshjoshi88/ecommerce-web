import base_url from '../export.js'

function inputdata() {
    let input = document.getElementById("number-input");
    let value = input.value;
    if (value.length != 10) {
        input.focus()
        input.classList.add("form-control-after")
        alert("mobile number must be of 10 digit")
    } else if (value[0] != "9" && value[0] != "8" && value[0] != "7" && value[0] != "6") {
        alert("mobile number must start with 6,7,8,9")
        input.focus()
        input.classList.add("form-control-after")

    } else {
        input.classList.remove("form-control-after");
        input.classList.add("form-control-active")  
    }
    let password = document.getElementById("password-input")
    let passwordvalue = password.value;
    if (passwordvalue.length <= 8) {
        alert("plese enter 8 number password")
        let main2 = document.getElementById("main2")
        main2.focus();
        main2.style.boxShadow = "0 0 0 .25rem red"
    } else {
        main2.style.boxShadow = "none"
        getdataapi(value, passwordvalue)
    }
}
let submit_butons = document.getElementById("submit-buton");
submit_butons.addEventListener("click",()=>{
    inputdata()
    console.log("SUBMIT");
    
})

let inputs = document.getElementById("number-input").focus();


let forms = document.getElementById("sumbit-form")
function sumbit(event) {
    event.preventDefault();
}
forms.addEventListener("submit", sumbit)
let input = document.getElementById("number-input");
input.addEventListener('focus', function (e) {
    this.style.boxShadow = "0 0 0 .25rem red"
})


let main_icon2 = document.getElementById("main-icon2")
let main_icon = document.getElementById("main-icon")
main_icon.addEventListener("click", () => {
    let password = document.getElementById("password-input")
    if (password.type == "password") {
        password.type = "text"
        let main_icon2 = document.getElementById("main-icon2")
        main_icon2.style.display = "block"
        let main_icon = document.getElementById("main-icon")
        main_icon.style.display = "none"
    }
})


main_icon2.addEventListener("click", () => {
    let password = document.getElementById("password-input")
    if (password.type == "text") {
        password.type = "password"
        let main_icon2 = document.getElementById("main-icon2")
        main_icon2.style.display = "none"
        let main_icon = document.getElementById("main-icon")
        main_icon.style.display = "block"
    }
})

function getdataapi(mobile, password) {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        
        "mobile": mobile,
        "password": password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(`${base_url}/api/v1/auth/signin/request`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            if (result.success && result.message == "Successfully completed the request" && result.data) {
                localStorage.setItem("uuid", result.data)
                console.log("otp was succefull send");
                window.location.href = "/otp-pages/otp.html"
                document.getElementById("number-input").value = ""
                document.getElementById("password-input").value = ""
            }
            else if (!result.success) {
                console.log(error.explanation[0]);
            } else {
                console.log("something went wrong please try again latter");
            }
        })
        .catch((error) => {
            console.log(error)
            alert("something went wrong")
        });
}