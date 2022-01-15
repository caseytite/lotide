const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
};
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
const eqObjects = function (obj1, obj2) {
  // Returns true if both objects have identical keys with identical values.
  // Otherwise you get back a big fat false!
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);

  if (key1.length !== key2.length) return false;

  for (let key of key1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
    console.log(Array.isArray(obj1[key]), Array.isArray(obj2[key]));
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
