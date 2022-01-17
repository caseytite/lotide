const findKeyByValue = require("../findKeyByValue");
const assertEqual = require("../assertEqual");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  timeTravel: "Dark",
  shooter: "James Bond",
};

findKeyByValue(bestTVShowsByGenre, "The Wire");
findKeyByValue(bestTVShowsByGenre, "That '70s Show");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Dark"), "timeTravel");
assertEqual(findKeyByValue(bestTVShowsByGenre, "James Bond"), "shooter");
