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

module.exports = assertObjectsEqual;
