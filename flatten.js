const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let x = 0; x < arr2.length; x++) {
      console.log(arr1[i], arr2[x]);
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

const assertArraysEqual = function (arr1, arr2) {
  eqArrays(arr1, arr2) ? console.log(true) : console.log(false);
};

const flatten = function (arr) {
  let output = [];
  // console.log(Array.isArray(arr));
  for (let num of arr) {
    Array.isArray(num) ? output.push(...num) : output.push(num);

    // console.log(num);
  }
  console.log(output);
  return output;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
