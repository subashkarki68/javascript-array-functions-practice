import { characters } from "./characters.js";

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender
/////////////////////////////////////////////////////////////////////////////////////////////
//1. Sort by mass
const sortMass = (arr) => arr.sort((a, b) => a.mass - b.mass);
console.log("By mass:");
console.table(sortMass(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//2. Sort by height
const sortHeight = (arr) => arr.sort((a, b) => a.height - b.height);
console.log("By height:");
console.table(sortHeight(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//3. Sort by name
const sortName = (arr) =>
  arr.sort((a, b) => {
    const aname = a.name.toUpperCase();
    const bname = b.name.toUpperCase();
    return aname < bname ? -1 : aname > bname ? 1 : 0;
  });
console.log("By name:");
console.table(sortName(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//4. Sort by gender
const sortGender = (arr) =>
  arr.sort((a, b) => {
    const agender = a.gender.toUpperCase();
    const bgender = b.gender.toUpperCase();
    if (agender === "MALE" && bgender === "MALE") return 0;
    if (agender === "MALE" && bgender === "FEMALE") return -1;
    if (agender === "FEMALE" && bgender === "MALE") return 1;
  });
console.log("By gender:");
console.table(sortGender(characters));
/////////////////////////////////////////////////////////////////////////////////////////////
//4. Sort by gender
const sortGenderC = (arr, whoIsFirst = "MALE") =>
  arr.sort((a, b) => {
    const agender = a.gender.toUpperCase();
    const bgender = b.gender.toUpperCase();
    const firstGender = whoIsFirst.toUpperCase();
    if (firstGender === "MALE") {
      if (agender === "MALE" && bgender === "MALE") return 0;
      if (agender === "MALE" && bgender === "FEMALE") return -1;
      if (agender === "FEMALE" && bgender === "MALE") return 1;
    }
    if (firstGender === "FEMALE") {
      if (agender === "FEMALE" && bgender === "FEMALE") return 0;
      if (agender === "MALE" && bgender === "FEMALE") return 1;
      if (agender === "FEMALE" && bgender === "MALE") return -1;
    }
  });
console.log("By gender version 2:");
console.table(sortGenderC(characters));
