//setTimeout :- run one time
// setInterval :- run multiple
//clearTimeout
//clearInterval
// let count=10;
// let a=setInterval(function(){
//     if(count>=1){
//         count --;
//         console.log(count);
//     }
//     else{
//         clearInterval(a)
//     }
// },1000)
let count=0;
let pr=document.querySelector(".progress-fill")
let t=document.querySelector(".progress-text");
setInterval(function(){
    if(count<100){
        count++;
        pr.style.width=`${count}%`;
        t.textContent=`${count}%`;

    }

},30)