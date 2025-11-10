/*fetch('https://randomuser.me/api/')
.then((rawdata) => {
    return rawdata.json();  //jb hum data fetch karte hai to use pehle .then main vapas se json format main lana padta hai
})
.then((data) => { //here we can access the actual data
    console.log(data.results[0].name.first)
})
.catch((err) => {
    console.log(err);
})*/

//to access multiple users
function getUser() {
    // Clear existing user cards
    const container = document.getElementById("user-card-container");
    container.innerHTML = '';
fetch('https://randomuser.me/api/?results=3')
.then((rawdata) => {
    return rawdata.json();  //jb hum data fetch karte hai to use pehle .then main vapas se json format main lana padta hai
})
.then((data) => { //here we can access the actual data
    data.results.forEach((user) => {
    // console.log(user.name);
    // Parent card
    const card = document.createElement("div");
    card.className = "bg-white shadow-md rounded-xl overflow-hidden";

    // Wrapper
    const wrapper = document.createElement("div");
    wrapper.className = "p-6 flex items-center space-x-6";

    // Avatar image
    const img = document.createElement("img");
    img.className = "w-20 h-20 rounded-full object-cover";
    img.src = user.picture.large;
    img.alt = "User avatar";

    // Info container
    const info = document.createElement("div");

    // Name
    const name = document.createElement("h2");
    name.className = "text-lg font-semibold text-slate-900";
    name.textContent = `${user.name.first} ${user.name.last}`;

    // Role
    const role = document.createElement("p");
    role.className = "text-sm text-slate-500";
    role.textContent = "Frontend Developer";

    // Email link
    const email = document.createElement("a");
    email.className = "text-sm text-indigo-600 hover:underline";
    email.href = "mailto:alex@example.com";
    email.textContent = "alex@example.com";

    // Append items
    info.appendChild(name);
    info.appendChild(role);
    info.appendChild(email);

    wrapper.appendChild(img);
    wrapper.appendChild(info);
    card.appendChild(wrapper);

    // Add to body or any container
    document.getElementById("user-card-container").appendChild(card);

    });
})
.catch((err) => {
    console.log(err);
})
}

document.getElementById("refresh-btn").addEventListener("click", getUser);

// Initial fetch
getUser();