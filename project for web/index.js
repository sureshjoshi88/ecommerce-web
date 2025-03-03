function isuserauthicated(){
 const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer sa d,jnsaudsbsaxudnfbdmbcudfcia,bufvdkshkaihfbjdudshfkjdsfkdsakdsakmxidahfufdjf");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("http://localhost:3000/api/v1/auth/signin/request", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result.success){
        let body = document.getElementsByTagName("body")
        body[0].children[0].remove();
    }else{
        window.location.href="/sign-in-pages/signin.html"
        console.log(result.error.explanation);
        
    }
  })
  .catch((error) => console.error(error));
}
isuserauthicated();