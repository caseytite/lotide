const tail = require("../tail");
const assertEqual = require("../assertEqual");

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);

const words = ["Yo Yo", "lighthouse", "Labs"];

tail(words);
assertEqual(words.length, 3);

tail(["Hello"]);
tail([]);
