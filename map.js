import { characters } from "./characters.js";
//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names
/////////////////////////////////////////////////////////////////////////////////////////////
//1. Get array of all names
const getAllNames = (arr) => arr.map((a) => a.name);
console.log(getAllNames(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//2. Get array of all heights
const getAllHeights = (arr) => arr.map((a) => a.height);
console.log(getAllHeights(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//3. Get array of objects with just name and height properties
const getObjWithNameAndHeight = (arr) =>
  arr.map((a) => {
    return { name: a.name, height: a.height };
  });
console.log(getObjWithNameAndHeight(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//4. Get array of all first names
const fNames = (arr) => arr.map((a) => a.name.split(" ")[0]);
console.log(fNames(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
