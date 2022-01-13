const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function (obj, value) {
  let output;

  for (let val in obj) {
    // console.log(obj[val]);
    if (obj[val] === value) {
      // console.log(val);
      output = val;
      return val;
    }
  }
  // console.log(output);
  return output;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  timeTravel: "Dark",
  shooter: "James Bond",
};

findKeyByValue(bestTVShowsByGenre, "The Wire");
findKeyByValue(bestTVShowsByGenre, "That '70s Show");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Dark"), "timeTravel");
assertEqual(findKeyByValue(bestTVShowsByGenre, "James Bond"), "shooter");
