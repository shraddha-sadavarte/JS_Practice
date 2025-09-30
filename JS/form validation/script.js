let nm = document.querySelector("#name")
let form = document.querySelector("form")
let email=document.querySelector("#email")
form.addEventListener("submit", function(dets){
    dets.preventDefault();

    if(nm.value.length <= 2){
        document.querySelector("#hide").style.display="initial";
    }
    else{
        document.querySelector("#hide").style.display="none";
    }
})

form.addEventListener("submit", function(dets){
    dets.preventDefault();
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z-0-9._]+\.[a-zA-Z]{2,}$/;
    let a=regex.test('shrutijadhav1411@gmail.com');
    console.log(a);
})