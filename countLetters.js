const countLetters = function (sentance) {
  const letterCount = {};
  let str = sentance.replaceAll(" ", "");

  for (let char of str) {
    if (letterCount[char]) {
      letterCount[char] += 1;
    } else {
      letterCount[char] = 1;
    }
  }
 
  return letterCount;
};


module.exports = countLetters;
