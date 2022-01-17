const eqArrays = require("./eqArrays");

let first = [1, 2, 3, 5, 4, 5];
let second = [1, 2, 3, 4, 5];

const assertArraysEqual = function (arr1, arr2) {
  eqArrays(arr1, arr2)
    ? console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

module.exports = assertArraysEqual;
