/* eslint-disable no-new */
import personajes from "./personajes.js";
import Card from "./components/Card.js";

const cardsContainer = document.querySelector(
  ".characters-list.row.list-unstyled"
);

personajes.forEach((character) => {
  new Card(cardsContainer, character, "character col");
});
