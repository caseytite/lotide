const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      i++;
      return eqArrays(arr1[i], arr2[i]);
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function (actual, expected) {
  eqArrays(actual, expected) ? console.log(true) : console.log(false);
};

const middle = function (arr) {
  let output = [];
  let middle = arr[Math.floor(arr.length / 2)];
  let length = arr.length;
  // console.log(arr.length);

  if (length <= 2) {
    output = [];
  }
  if (length > 2) {
    if (length % 2 === 0) {
      //do this
      output = [arr[middle] - 2, arr[middle] - 1];
    } else if (length % 2 === 1) {
      // console.log("here");
      output = [middle];
      //do this
    }
  }
  // console.log(output);
  return output;
};
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
