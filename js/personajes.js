/* eslint-disable import/extensions */
import Asesor from "./characters/Asesor.js";
import Escudero from "./characters/Escudero.js";
import Luchador from "./characters/Luchador.js";
import Rey from "./characters/Rey.js";

const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Luchador("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);

const gameOfThronesCharacters = [joffrey, jaime, daenerys, tyrion, bronn];

export default gameOfThronesCharacters;
