const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(arr) {
  console.log(arr.slice(1));
  return arr.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);

const words = ["Yo Yo", "lighthouse", "Labs"];

tail(words);
assertEqual(words.length, 3);

tail(["Hello"]);
tail([]);
