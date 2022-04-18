import personajes from "./personajes.js";

const allGotCharacters = personajes;

allGotCharacters.forEach((personaje) => {
  console.table(personaje.nombre);
});
