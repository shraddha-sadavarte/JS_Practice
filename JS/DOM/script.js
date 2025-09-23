let file = document.querySelector("#file");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    file.click();
})

file.addEventListener('change',function(dt)
{
    const file=dt.target.files[0];
    if(file){
        btn.textContent=file.name;
    }
}
)

