import { characters } from "./characters.js";
//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names
/////////////////////////////////////////////////////////////////////////////////////////////
//1. Get total mass of all characters
const tmc = (arr) => arr.reduce((prev, curr) => prev + +curr.mass, 0);
console.log("Total Mass of all Characters: ", tmc(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//2. Get total height of all characters
const thc = (arr) => arr.reduce((prev, curr) => prev + +curr.height, 0);
console.log("Total Height of all Characters: ", tmc(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//3. Get total number of characters by eye color
const tnce = (arr) =>
  arr.reduce(
    (prev, curr) => {
      curr.eye_color === "blue"
        ? prev.blue++
        : curr.eye_color === "brown"
        ? prev.brown++
        : curr.eye_color === "yellow"
        ? prev.yellow++
        : null;
      return prev;
    },
    { blue: 0, brown: 0, yellow: 0 }
  );
console.log(tnce(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//3. Get total number of characters by eye color
const tnceye = (eye_color, arr) =>
  arr.reduce((prev, curr) => {
    curr.eye_color === eye_color ? prev++ : null;
    return prev;
  }, 0);
console.log(tnceye("blue", characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//4. Get total number of characters in all the character names
const tncn = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev + curr.name.length;
  }, 0);
};
console.log(tncn(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
