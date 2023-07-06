const button = document.getElementById("charactersButton");
let counter = 1;
const infoContainer = document.getElementById("infoContainer");

const sectionColors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"];

button.addEventListener("click", function () {
  const sectionDiv = document.createElement("div");
  sectionDiv.classList.add("section-div");

  const sectionNumber = Math.ceil(counter / 5);
  sectionDiv.classList.add(`section-${sectionNumber}`);

  for (let i = counter; i < counter + 5; i++) {
    fetch(`https://swapi.dev/api/people/${i}`)
      .then((response) => response.json())
      .then((data) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const sectionCircle = document.createElement("div");
        sectionCircle.classList.add("card-section");
        sectionCircle.style.backgroundColor =
          sectionColors[(sectionNumber - 1) % sectionColors.length];

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        cardBody.innerHTML = `
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">Altura: ${data.height}</p>
          <p class="card-text">Peso: ${data.mass}</p>
        `;

        card.appendChild(sectionCircle);
        card.appendChild(cardBody);
        sectionDiv.appendChild(card);
      })
      .catch((error) => {
        console.log("Error al obtener la información del personaje:", error);
      });
  }

  infoContainer.appendChild(sectionDiv);
  counter += 5;
});
