const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let x = 0; x < arr2.length; x++) {
      if (arr1[i] === arr2[x]) {
        return true;
      } else {
        return false;
      }
    }
  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
