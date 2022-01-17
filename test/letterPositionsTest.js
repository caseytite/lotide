const letterPositions = require("../letterPositions");
const assertArraysEqual = require("../assertArraysEqual");

letterPositions("lighthouse in the house");

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
