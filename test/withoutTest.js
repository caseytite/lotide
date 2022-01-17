const without = require("../without");

const thisOne = [1, 2, 3];
without(thisOne, [1]);
without(["1", "2", "3"], [1, 2, "3"]);

assertArraysEqual(thisOne, [1, 2, 3]);
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
