const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      // console.log(arr1[i], arr2[i]);
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  eqArrays(arr1, arr2) ? console.log(true) : console.log(false);
};

const words = ["ground", "control", "to", "major", "tom"];
const motorbikes = ["yamaha", "kawasaki", "honda", "ducati"];
const guitars = ["also yamaha", "washburn", "dean", "ibanez"];
const rando = [null, undefined, [1, 2], true, false];

//------------map function-------------------
const map = function (arr, callback) {
  const results = [];

  for (let item of arr) {
    results.push(callback(item));
  }

  return results;
};

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
