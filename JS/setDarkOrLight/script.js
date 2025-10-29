function setDarkORLight(){
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
    }
    else{
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
    }
}

setDarkORLight();

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function(){
    setDarkORLight();
})

let a= document.getElementById('theme-toggle')
a.addEventListener("click",function(){
    if(document.body.classList.contains('dark-theme')){
        document.body.className = 'light-theme'
    }
    else{
        document.body.className = 'dark-theme'
    }

})