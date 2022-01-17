

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
  //       console.log(char);
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
    let letter = str[index];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(+index);
      } else {
        results[letter] = [+index];
      }
    }
  }

  // // console.log(str);
  // console.log(results);

  return results;
};

module.exports = letterPositions;
