import { characters } from "./characters.js";

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
/////////////////////////////////////////////////////////////////////////////////////////////
//1. Is there at least one male character?
const anyMale = (a) => a.some((b) => b.gender === "male");
console.log(anyMale(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//2. Is there at least one character with blue eyes?
const anyBlueEye = (a) => a.some((b) => b.eye_color === "blue");
console.log(anyBlueEye(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//3. Is there at least one character taller than 210?
const antT = (a) => a.some((b) => b.height > 210);
console.log(antT(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//4. Is there at least one character that has mass less than 50?
const mLess = (a) => a.some((b) => b.mass < 50);
console.log(mLess(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
