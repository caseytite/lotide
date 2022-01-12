const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentance) {
  const letterCount = {};
  let str = sentance.replaceAll(" ", "");

  for (let char of str) {
    if (letterCount[char]) {
      letterCount[char] += 1;
    } else {
      letterCount[char] = 1;
    }
  }
  console.log(letterCount);
  return letterCount;
};

countLetters("lighthouse in the house");

/*
when looping the object we have to assign it a value first otherwise if we try to increment it we will be tryin to add 1 to undefined and that will not work either returning NaN or undefiend so first we set it to 1 and then we can increment it
*/
