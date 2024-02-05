import { characters } from "./characters.js";

//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters
/////////////////////////////////////////////////////////////////////////////////////////////
//1. Get characters with mass greater than 100
const charMoreHunMass = (arr) => arr.filter((a) => +a.mass > 100);
console.table(charMoreHunMass(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//2. Get characters with height less than 200
const charMoretwoHunHei = (arr) => arr.filter((a) => +a.height > 200);
console.table(charMoretwoHunHei(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//3. Get all male characters
const maleChar = (arr) => arr.filter((a) => a.gender === "male");
console.table(maleChar(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//4. Get all female characters
const female = (arr) => arr.filter((a) => a.gender === "female");
console.table(female(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
