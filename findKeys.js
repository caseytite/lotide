const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function (obj, callback) {
  let ouput;
  for (let key in obj) {
    // console.log(key); movie name
    // console.log(obj);whole object
    // console.log(callback(obj[key])); returns the true or false
    if (callback(obj[key])) {
      // console.log(key); returns the name
      ouput = key;
      break;
      //if we dont have the break it will return last key with the stars of 2
    } else {
      ouput;
    }
  }
  // console.log(ouput);
  return ouput;
};

const return3 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"
const return2 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 4
); // => "undefined"
const return1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 3
); // => "Akaleri"
assertEqual(return1, "Akaleri");
assertEqual(return2, undefined);
assertEqual(return3, "noma");
