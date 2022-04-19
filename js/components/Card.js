import Component from "./Component.js";
import Asesor from "../characters/Asesor.js";
import Escudero from "../characters/Escudero.js";
import Luchador from "../characters/Luchador.js";
import Rey from "../characters/Rey.js";

class Card extends Component {
  constructor(parentElement, character, nameClass) {
    super(parentElement, "li", "character col");
    this.character = character;
    this.nameClass = nameClass;
    this.render();
    this.myEmoji();
    this.mySkills();
  }

  mySkills() {
    let mySkyllslist;
    if (this.character instanceof Rey) {
      mySkyllslist = `
      <li>Años de reinado: ${this.character.anyosReinado}</li>`;
    }
    if (this.character instanceof Luchador) {
      mySkyllslist = `
      <li>Arma: ${this.character.arma}</li>
      <li>Destreza: ${this.character.destreza}</li>
      `;
    }
    if (this.character instanceof Asesor) {
      mySkyllslist = `
        <li>Asesora a: ${this.character.asesorado.nombre}</li>
      `;
    }
    if (this.character instanceof Escudero) {
      mySkyllslist = `
        <li>Sirve a: ${this.character.sirveA.nombre}</li>
        <li>Pelotismo: ${this.character.gradoPelotismo}</li>
      `;
    }

    return mySkyllslist;
  }

  myEmoji() {
    let icon = "";
    if (this.character instanceof Rey) {
      icon = "👑";
    }
    if (this.character instanceof Luchador) {
      icon = "🗡";
    }
    if (this.character instanceof Asesor) {
      icon = "🎓";
    }
    if (this.character instanceof Escudero) {
      icon = "🛡";
    }
    return icon;
  }

  render() {
    this.element.innerHTML = `

          <div class="card character__card">
            <img src="img/${this.character.nombre}.jpg" alt="${
      this.character.nombre
    } ${this.character.familia}" class="character__picture card-img-top">
            <div class="card-body">
              <h2 class="character__name card-title h4">${
                this.character.nombre
              } ${this.character.familia}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${this.character.edad} años</li>
                  <li>
                    Estado:
                    <i class="${
                      this.character.vivo
                        ? "fas fa-thumbs-up"
                        : "fas fa-thumbs-down"
                    }"></i>
                   
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  ${this.mySkills()}
                </ul>
                <div class="character__actions">
             
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>

                </div>
              </div>
            </div>
            <i class="emoji">${this.myEmoji()}</i>
          </div>
        
  `;
  }
}

export default Card;
