let form = document.querySelector('#fr');
    let inputs = document.querySelectorAll('#fr input');
    let main = document.querySelector("#main");

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let name = inputs[0].value || "Unnamed";
      let occupation = inputs[1].value || "No occupation";
      let info = inputs[2].value || "No information provided.";
      let imgUrl = inputs[3].value || "https://via.placeholder.com/70";

      // Create card
      let card = document.createElement('div');
      card.classList.add("card");

      let profile = document.createElement("div");
      profile.classList.add("profile");

      let img = document.createElement("img");
      img.setAttribute("src", imgUrl);

      let h3 = document.createElement("h3");
      h3.textContent = name;

      let h5 = document.createElement("h5");
      h5.textContent = occupation;

      let p = document.createElement("p");
      p.textContent = info;

      profile.appendChild(img);
      card.appendChild(profile);
      card.appendChild(h3);
      card.appendChild(h5);
      card.appendChild(p);

      main.appendChild(card);

      form.reset();
    })
