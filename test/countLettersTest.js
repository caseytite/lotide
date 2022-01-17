const countLetters = require("../countLetters");
const assertEqual = require("../assertEqual");

countLetters("lighthouse in the house");

assertEqual(countLetters("lighthouse in the house").o, 2);
assertEqual(countLetters("lighthouse in the house").u, 2);
