const letterPositions = function (sentance) {
  const results = {};
  //for and for of
  // let str = sentance.split("");
  //for in
  let str = sentance;

  // ---------------------------------for loop
  // for (let i = 0; i < str.length; i++) {
  //   let char = str[i];
  //   if (char !== " ") {
  //     if (results[char]) {
  //       results[char].push(i);
  //     } else {
  //       results[char] = [i];
  //     }
  //   }
  // }
  //-----------------------------------for of
  // let i = 0;
  // for (let char of str) {
  //   if (char !== " ") {
  //     if (results[char]) {
  //       results[char].push(i);
  //     } else {
  //       results[char] = [i];
  //     }
  //     i++;
  //   } else {
  //     i++;
  //   }
  // }
  //------------------------------for in
  for (let index in str) {
    // console.log(index);
    let letter = str[index];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(+index);
      } else {
        results[letter] = [+index];
      }
    }
  }

  // console.log(str);
  console.log(results);

  return results;
};

letterPositions("lighthouse in the house");

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

assertArraysEqual(letterPositions("hello").e, ["1"]);
assertArraysEqual(letterPositions("hello").l, ["2"]);
