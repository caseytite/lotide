const without = function (source, itemsToRemove) {
  let newArray = [...source];
  for (let i = 0; i < source.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        newArray.splice(i, 1);
        break;
      } else {
        continue;
      }
    }
  }
  return newArray;
};
module.exports = without;
