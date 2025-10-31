const users = [
  {
    name: "Amisha Rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1c5b96e8300751f952488d6c002.jpg",
    bio: "Silent chaos in a loud world 🌌 | Not for everyone",
  },
  {
    name: "Kiara Mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "Main character energy ✨ | Coffee > Everything ☕",
  },
  {
    name: "Isha Oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d.jpg",
    bio: "Walking through dreams in doc martens 🌙 | Late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be940b5bf03a50b5dc4bfec8063.jpg",
    bio: "Too glam to give a damn 💅 | Filter free soul",
  },
  {
    name: "Aryan Malhotra",
    pic: "https://i.pinimg.com/736x/3b/5e/74/3b5e74a2e1b62b967b963e676fdac5.jpg",
    bio: "Building dreams one line of code at a time 💻 | Caffeine lover ☕",
  },
  {
    name: "Tanya Verma",
    pic: "https://i.pinimg.com/736x/84/f2/2a/84f22ab43f10bb25b6d32412c85a9d.jpg",
    bio: "Sunshine mixed with a little hurricane 🌤️ | Music = therapy 🎶",
  }
];

function showUsers(arr) {
  const container = document.querySelector(".container");
  container.innerHTML = ""; // clear old cards

  arr.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    const blur = document.createElement("div");
    blur.classList.add("blurred-layer");

    const content = document.createElement("div");
    content.classList.add("content");

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = user.bio;

    content.append(h3, p);
    card.append(img, blur, content);
    container.appendChild(card);
  });
}

showUsers(users);


let a = document.querySelector('.search');
a.addEventListener("input", function() {
  const searchValue = a.value.toLowerCase().trim(); // convert to lowercase

  const newuser = users.filter((user) => {
    return user.name.toLowerCase().includes(searchValue); // compare lowercase versions
  });

  showUsers(newuser);
});
