const eqObjects = require("../eqObjects");
const assertEqual = require("../assertEqual");

console.log(
  eqObjects({ a: { z: [1, 2, 3] }, b: 2 }, { a: { z: [1, 2, 3] }, b: 2 })
); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false

console.log(
  eqObjects({ a: { z: 1, x: 15 }, b: 2 }, { a: { x: 15, z: 1 }, b: 2 })
);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2);

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(cd, dc), true);
