let uuid = localStorage.getItem("uuid")
if(!uuid){
    window.location.href="/sign-in-pages/signin.html"
    alert("please sign in")
}


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
let reset_otp = document.getElementById("opt-reset")
reset_otp.style.display="none"
let value = document.getElementById("counter")
// let counter = 60;
// setInterval(() => {
//     counter--;
//     value.innerText = counter
//     if(counter>=0){
//         clearInterval(counter)
//     }
//     if(counter==1){
//         reset_otp.style.display="block"
    
//     }
// }, 1000);


function startTimer(durationInSeconds) {
    let timeLeft = durationInSeconds;
    
    const timerInterval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        // console.log(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
        value.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // console.log("⏳ Time's up!");
                    reset_otp.style.display="block"
                    value.style.display = "none"
                    let curser = document.querySelector(".curser").innerText="";
          
        }

        timeLeft--;
    }, 1000);
}

// 2 मिनट का टाइमर (120 सेकंड)
startTimer(120);


let opt_form = document.getElementById("sumbit-otp")
function sumbit(e){
    e.preventDefault();
}
opt_form.addEventListener("submit",sumbit)

let submit_button = document.getElementById("submit-buton")
submit_button.addEventListener("click",()=>{
let otp1 = document.getElementById("otp-1");
let otp2 = document.getElementById("otp-2");
let otp3 = document.getElementById("otp-3");
let otp4 = document.getElementById("otp-4");
let otp5 = document.getElementById("otp-5");
let otp6 = document.getElementById("otp-6");

    if(otp1.value.length==1&&otp2.value.length==1&&otp3.value.length==1&&otp4.value.length==1&&otp5.value.length==1&&otp6.value.length==1){
        window.location="/project for web/home.html"
    }else{
        alert("please enter a value")
    }
});


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