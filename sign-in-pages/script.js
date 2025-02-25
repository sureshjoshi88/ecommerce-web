function inputdata(){
    let input = document.getElementById("number-input");
    let value = input.value;
    if(value.length!=10){
        alert("mobile number must be of 10 digit")
        input.classList.add("form-control-after")
    }else if(value[0]!="9" && value[0]!="8" && value[0]!="7" && value[0]!="6"){
        alert("mobile number must start with 6,7,8,9")
        input.classList.add("form-control-after")

    }else{
        input.classList.remove("form-control-after");

    }
}

// let input =  document.getElementById("exampleInputEmail1");
// input.addEventListener('focus',function(e){
//     console.log("clicked")
//     this.style.boxShadow = "0 0 0 .25rem red"
//  })
