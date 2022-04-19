import personajes from "./personajes.js";

const allGotCharacters = personajes;

const mainDiv = document.createElement("div");
const mainDivParent = document.body;
mainDiv.className = "app container";
mainDivParent.prepend(mainDiv);

const characterList = document.createElement("ul");
characterList.className = "characters-list row list-unstyled";
mainDiv.appendChild(characterList);

allGotCharacters.forEach((character) => {
  const characterListElement = document.createElement("li");
  characterListElement.className = "character col";
  characterList.appendChild(characterListElement);

  const characterCardDiv = document.createElement("div");
  characterCardDiv.className = "card character__card";
  characterListElement.appendChild(characterCardDiv);

  const characterImage = document.createElement("img");
  characterImage.className = "character__picture card-img-top";
  const characterImageUrl = `img/${character.nombre.toLowerCase()}.jpg`;
  characterImage.src = characterImageUrl;
  characterImage.setAttribute("alt", "Nombre y familia del personaje");
  characterCardDiv.appendChild(characterImage);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  characterCardDiv.appendChild(cardBody);

  const cardName = document.createElement("h2");
  cardName.className = "character__name card-title h4";
  cardName.textContent = `${character.nombre} ${character.familia}`;
  cardBody.appendChild(cardName);

  const characterInfo = document.createElement("div");
  characterInfo.className = "character__info";
  cardBody.appendChild(characterInfo);

  const characterInfoList = document.createElement("ul");
  characterInfoList.className = "list-unstyled";
  characterInfoList.innerHTML = `
<li>Edad: ${character.edad}</li>
<li>Estado:
  <i class="fas fa-thumbs-down"></i>
  <i class="fas fa-thumbs-up"></i>
</li>`;
  characterInfo.appendChild(characterInfoList);

  const cardOverlay = document.createElement("div");
  cardOverlay.className = "character__overlay";
  cardBody.appendChild(cardOverlay);

  const characterOverlayList = document.createElement("ul");
  characterOverlayList.className = "list-unstyled";
  characterOverlayList.innerHTML = `
<li>Años de reinado: X</li>
<li>Arma: XXX</li>
<li>Destreza: X</li>
<li>Peloteo: X</li>
<li>Asesora a: X</li>
<li>Sirve a: X</li>`;
  cardOverlay.appendChild(characterOverlayList);

  const characterActionsDiv = document.createElement("div");
  characterActionsDiv.className = "character__actions";
  cardOverlay.appendChild(characterActionsDiv);

  const characterTalkButton = document.createElement("button");
  characterTalkButton.className = "character__action btn";
  characterTalkButton.innerText = "habla";
  characterActionsDiv.appendChild(characterTalkButton);

  const characterDieButton = document.createElement("button");
  characterDieButton.className = "character__action btn";
  characterDieButton.innerText = "muere";
  characterActionsDiv.appendChild(characterDieButton);

  const characterEmoji = document.createElement("i");
  characterEmoji.className = "emoji";
  characterCardDiv.appendChild(characterEmoji);
});
