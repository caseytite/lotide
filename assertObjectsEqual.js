const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let x = 0; x < arr2.length; x++) {
      // console.log(arr1[i], arr2[x]);
      if (arr1[i] === arr2[x]) {
        // return true;
        i++;
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};
const eqObjects = function (obj1, obj2) {
  // Returns true if both objects have identical keys with identical values.
  // Otherwise you get back a big fat false!
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);

  if (key1.length !== key2.length) return false;

  for (let key of key1) {
    if (Array.isArray(obj1[key]) || Array.isArray(obj2[key])) {
      const result = eqArrays(obj1[key], obj2[key]);
      console.log(result);
      if (!result) return false;
    }
    // console.log(obj1[key], obj2[key]);
    else if (obj1[key] !== obj2[key]) {
      console.log(key);
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  actual === expected
    ? console.log(
        `✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
      )
    : console.log(
        `🛑 🛑 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
      );
};

const first = {
  name: "Casey",
  age: 31,
  adress: [210, "douglas"],
};
const second = {
  name: "Casey",
  age: 31,
  adress: [210, "douglas"],
};

const third = {
  name: "Casey",
  age: 31,
  adress: [211, "douglas"],
};

assertObjectsEqual(eqObjects(first, second), true);
assertObjectsEqual(eqObjects(first, third), false);
