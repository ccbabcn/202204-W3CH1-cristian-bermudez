// import personajes from "./personajes.js";

class Component {
  character;

  constructor(character, parentElement, tag, nameClass) {
    this.character = character;
    this.element = document.createElement(tag);
    this.element.className = nameClass;
    this.parentElement = parentElement;
    parentElement.appendChild(this.element);
  }
}

export default Component;
