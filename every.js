import { characters } from "./characters.js";
//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?
/////////////////////////////////////////////////////////////////////////////////////////////
//1. Does every character have blue eyes?
const allBlue = (arr) => arr.every((a) => a.eye_color === "blue");
console.log(allBlue(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//2. Does every character have mass more than 40?
const allMoreFourty = (arr) => arr.every((a) => a.mass > 40);
console.log(allMoreFourty(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//3. Is every character shorter than 200?
const allShorterTwoHun = (arr) => arr.every((a) => a.height < 200);
console.log(allShorterTwoHun(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//4. Is every character male?
const allMale = (arr) => arr.every((a) => a.gender === "male");
console.log(allMale(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
