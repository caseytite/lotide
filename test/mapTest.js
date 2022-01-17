const map = require("../map");
const assertArraysEqual = require("../assertArraysEqual");

const words = ["ground", "control", "to", "major", "tom"];
const motorbikes = ["yamaha", "kawasaki", "honda", "ducati"];
const guitars = ["also yamaha", "washburn", "dean", "ibanez"];
const rando = [null, undefined, [1, 2], true, false];

const results1 = map(words, (word) => word);
// console.log(results1);
const results2 = map(motorbikes, (word) => word);
// console.log(results2);
const results3 = map(guitars, (word) => word);
// console.log(results3);
const results4 = map(rando, (word) => word);
// console.log(results4);

assertArraysEqual(results1, words);
assertArraysEqual(results2, motorbikes);
assertArraysEqual(results3, guitars);
assertArraysEqual(results4, rando);
