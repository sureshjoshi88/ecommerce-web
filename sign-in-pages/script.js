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
    }else{
        alert("succesfull")
        main2.style.boxShadow = "none"
    }
}

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
main_icon.addEventListener("click",()=>{
    let password = document.getElementById("password-input")
    if(password.type=="text"){
        password.type = "password"
        let main_icon2 = document.getElementById("main-icon2")
        main_icon2.style.display = "block"
        let main_icon = document.getElementById("main-icon")
        main_icon.style.display="none"
    } 

})


main_icon2.addEventListener("click",()=>{
    let password = document.getElementById("password-input")
     if(password.type =="password"){
        password.type="text"
        let main_icon2 = document.getElementById("main-icon2")
        main_icon2.style.display = "none"
        let main_icon = document.getElementById("main-icon")
        main_icon.style.display="block"
    }
 
})

