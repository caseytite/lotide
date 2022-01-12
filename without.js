const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let x = 0; x < arr2.length; x++) {
      if (arr1[i] === arr2[x]) {
        return true;
      } else {
        return false;
      }
    }
  }
};

const assertArraysEqual = function (arr1, arr2) {
  eqArrays(arr1, arr2) ? console.log(true) : console.log(false);
};

// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
// console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));

const without = function (source, itemsToRemove) {
  let newArray = [...source];
  // let
  // debugger;
  for (let i = 0; i < source.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        newArray.splice(i, 1);
        break;
      } else {
        // newArray.push(source[i]);
        continue;
      }
    }
  }
  console.log(newArray);
  return newArray;
};

const thisOne = [1, 2, 3];
without(thisOne, [1]);
without(["1", "2", "3"], [1, 2, "3"]);
// console.log(123);
console.log(thisOne);
assertArraysEqual(thisOne, [1, 2, 3]);
