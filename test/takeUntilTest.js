const takeUntil = require("../takeUntil");

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const words = ["ground", "control", "to", "major", "tom"];
const motorbikes = ["yamaha", "kawasaki", "honda", "ducati"];
const guitars = ["also yamaha", "washburn", "dean", "ibanez"];
const rando = [null, undefined, [1, 2], true, false];

const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const results3 = takeUntil(words, (word) => word === "to");
console.log(results3);
const results4 = takeUntil(motorbikes, (bike) => bike === "honda");
console.log(results4);
const results5 = takeUntil(guitars, (git) => git === "dean");
console.log(results5);
const results6 = takeUntil(rando, (randy) => randy === true);
console.log(results6);
