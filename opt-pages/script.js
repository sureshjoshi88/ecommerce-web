let otp1 = document.getElementById("otp-1");
let otp2 = document.getElementById("otp-2");
let otp3 = document.getElementById("otp-3");
let otp4 = document.getElementById("otp-4");
let otp5 = document.getElementById("otp-5");
let otp6 = document.getElementById("otp-6");


otp1.addEventListener("input",(e)=>{
    if(e.target.value.length>1){
        document.getElementById("otp-1").value = e.target.value[0]
    }else if(e.target.value.length==1){
        document.getElementById("otp-1").blur();
        document.getElementById("otp-2").focus();
    }
})