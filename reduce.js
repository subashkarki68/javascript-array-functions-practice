import { characters } from "./characters.js";
//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//1. Get total mass of all characters

const totalMass = (arr) => {
  return arr.reduce(
    (prevValue, currentValue) => prevValue + +currentValue.mass,
    0
  );
};
const mass = totalMass(characters);
console.log(mass);

//2. Get total height of all characters
const totalHeight = (arr) => {
  return arr.reduce((prev, curr) => prev + +curr.height, 0);
};
console.log(totalHeight(characters));

//3. Get total number of characters by eye color
const charWithEyeColor = (arr, color) => {
  return arr.reduce((prev, curr) => prev + +curr.height, 0);
};
