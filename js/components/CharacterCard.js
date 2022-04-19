// import personajes from "./personajes.js";

class CharactrCard {
  character;

  constructor(character, parentElement) {
    this.character = character;
    this.name = character.nombre;
    this.family = character.familia;
    this.age = character.edad;
    this.parentElement = parentElement;
    this.myImage();
  }

  myNameandFamily() {
    return `${this.name} ${this.family}`;
  }

  myImage() {
    const imageName = this.character.nombre.toLowerCase();
    const myImageUrl = `img/${imageName}.jpg`;
    const imageElemet = document.createAttribute("img");
    imageElemet.src = myImageUrl;
    return imageElemet;
  }
}

export default CharactrCard;
