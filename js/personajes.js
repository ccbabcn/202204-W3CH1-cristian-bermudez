/* eslint-disable import/extensions */
import Asesor from "./modules/Asesor.js";
import Escudero from "./modules/Escudero.js";
import Luchador from "./modules/Luchador.js";
import Rey from "./modules/Rey.js";

const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Luchador("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);

const gameOfThronesCharacters = [joffrey, jaime, daenerys, tyrion, bronn];

export default gameOfThronesCharacters;
