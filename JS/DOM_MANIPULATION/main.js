let h1 = document.querySelector("h1");
h1.innerText = "Hey...";
h1.innerHTML = "<b><i>My name is John...!</i></b>";

let img = document.querySelector("img");
img.setAttribute("src","https://images.unsplash.com/photo-1757704556607-8cd205e5ba10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D");
img.setAttribute("height","200px");
img.setAttribute("width","250px");

//create element, remove element, append child, textcontent, classList.add
let div = document.createElement("div");
div.textContent = "I am dynamically created div element";
document.body.appendChild(div);
div.innerHTML = "<p>I am paragraph tag</p>";
div.style.fontFamily = "Arial";
div.classList.add("div");