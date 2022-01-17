const middle = require("../middle");
const assert = require("chai").assert;
// const assertArraysEqual = require("../assertArraysEqual");

// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

describe("#middle", () => {
  it("should return the middle item of an array with an uneven amount of items", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("should return the middle two numbers for an array with even amount of items", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("should return an empty array for an array with 2 items", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return an empty array for an array with 1 item", () => {
    assert.deepEqual(middle([1]), []);
  });
});
