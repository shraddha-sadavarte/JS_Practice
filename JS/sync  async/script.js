/*function Timeoutfnc(){
    setTimeout(()=>{
        console.log("hey")
        
    },Math.floor(Math.random()*10)*1000)
}
 Timeoutfnc()*/

 //callback func :- function passed as parameter in another function]
 /*function callbackfnc(val){
    setTimeout(val,Math.floor(Math.random()*10)*1000)
}
 callbackfnc(function(){
    console.log("hey hello ")
 })*/


 
 //callback hell(pyramid of doom) [depricated now a days instead we use promise ] :- lets say main functions je ahee te kute  tri dusrikade aahe containing some data and callback function.  anni khali aapn jya function vr kam karto  te aapn nested way ne used karto 
 //multiple nested callback func are used  
 // callback inside another callback

 //promise
 let pr=new Promise(function(res,rej) {
    setTimeout(()=>{
        let rn=Math.floor(Math.random()*10);
        if(rn>5) res("resolved with "+rn);
            else rej("reject with "+rn);
    },1000)
 });

 /*pr
 .then(function(val) {
    console.log(val);
 })
 .catch(function(val){
    console.log(val);
 })*/

 //async await
 async function abcd(){
    try{
        let val=await pr;
        console.log(val);
    } catch(err){
        console.log(err);
    }
 }

 abcd();