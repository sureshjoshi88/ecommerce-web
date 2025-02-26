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
otp2.addEventListener("input",(e)=>{
    if(e.target.value.length>1){
        document.getElementById("otp-2").value = e.target.value[0]
    }else if(e.target.value.length==1){
        document.getElementById("otp-2").blur();
        document.getElementById("otp-3").focus();
    }else if(e.target.value.length==0){
        document.getElementById("otp-2").blur();
        document.getElementById("otp-1").focus();
    }
})
otp2.addEventListener("keydown",(e)=>{
    if(e.key=="Backspace" && e.target.value.length==0){
        document.getElementById("otp-2").blur();
        document.getElementById("otp-1").focus();
    }
})
otp3.addEventListener("input",(e)=>{
    if(e.target.value.length>1){
        document.getElementById("otp-3").value = e.target.value[0]
    }else if(e.target.value.length==1){
        document.getElementById("otp-3").blur();
        document.getElementById("otp-4").focus();
    }else if(e.target.value.length==0){
        document.getElementById("otp-3").blur();
        document.getElementById("otp-2").focus();
    }
})
otp3.addEventListener("keydown",(e)=>{
    if(e.key=="Backspace" && e.target.value.length==0){
        document.getElementById("otp-3").blur();
        document.getElementById("otp-2").focus();
    }
})
otp4.addEventListener("input",(e)=>{
    if(e.target.value.length>1){
        document.getElementById("otp-4").value = e.target.value[0]
    }else if(e.target.value.length==1){
        document.getElementById("otp-4").blur();
        document.getElementById("otp-5").focus();
    }else if(e.target.value.length==0){
        document.getElementById("otp-4").blur();
        document.getElementById("otp-3").focus();
    }
})
otp4.addEventListener("keydown",(e)=>{
    if(e.key=="Backspace" && e.target.value.length==0){
        document.getElementById("otp-4").blur();
        document.getElementById("otp-3").focus();
    }
})
otp5.addEventListener("input",(e)=>{
    if(e.target.value.length>1){
        document.getElementById("otp-5").value = e.target.value[0]
    }else if(e.target.value.length==1){
        document.getElementById("otp-5").blur();
        document.getElementById("otp-6").focus();
    }else if(e.target.value.length==0){
        document.getElementById("otp-5").blur();
        document.getElementById("otp-4").focus();
    }
})
otp5.addEventListener("keydown",(e)=>{
    if(e.key=="Backspace" && e.target.value.length==0){
        document.getElementById("otp-5").blur();
        document.getElementById("otp-4").focus();
    }
})
otp6.addEventListener("input",(e)=>{
    if(e.target.value.length>1){
        document.getElementById("otp-6").value = e.target.value[0]
    }else if(e.target.value.length==0){
        document.getElementById("otp-6").blur();
        document.getElementById("otp-5").focus();
    }else if(e.target.value.length==1){
        document.getElementById("otp-6").blur();
    }
})
otp6.addEventListener("keydown",(e)=>{
    if(e.key=="Backspace" && e.target.value.length==0){
        document.getElementById("otp-6").blur();
        document.getElementById("otp-5").focus();
    }
})



// for(let i = 1;i<=6;i++){
//     let otp  =`otp-${[i]}`
//     let otpx = document.getElementById(otp);
//     otpx.addEventListener("input",(e)=>{
//         if(e.target.value.length>1){
//             document.getElementById(`otp-${[i+1]}`).value = e.target.value[0]
//         }else if(e.target.value.length==1){
//             document.getElementById(`otp-${[i]}`).blur();
//             document.getElementById(`otp-${[i+1]}`).focus();

//         }
//         else if(e.target.value.length==0){
//             document.getElementById(`otp-${[i+1]}`).blur();
//             document.getElementById(`otp-${[i+1]}`).focus();
//         }
//     })
//     otpx.addEventListener("keydown",(e)=>{
//         if(e.key=="Backspace" && e.target.value.length==0){
//             document.getElementById(`otp-${[i]}`).blur();
//             document.getElementById(`otp-${[i-1]}`).focus();
//         }
//     })
// }