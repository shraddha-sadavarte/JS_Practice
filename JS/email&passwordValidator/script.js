let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("#loginForm")

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    const emailreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    //console.log(email.value)
    let isValid = true;

    document.querySelector("#emailError").textContent="";
    document.querySelector("#passwordError").textContent="";

    let emailinp = emailreg.test(email.value);
    let passwordinp = passwordreg.test(password.value);

    if(!emailinp){
        document.querySelector("#emailError").textContent = "Email should be in proper format";
        isValid = false;
    } else{
        document.querySelector("#emailError").style.display = "none";
    }

    if(!passwordinp){
        document.querySelector("#passwordError").textContent = "Password should contain one uppercase, one lowercase, one digit and one special character(8 chars)";
        isValid = false;
    }
    else{
        document.querySelector("#passwordError").style.display = "none";
    }

    if(isValid){
        document.querySelector("#valid").textContent = "You are ready to go...";
    }

})