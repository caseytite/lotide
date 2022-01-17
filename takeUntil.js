const takeUntil = function (array, callback) {
  const results = [];

  for (let i = 0; callback(array[i]) === false; i++) {
    if (i > array.length) {
      break;
    } else {
      results.push(array[i]);
    }
  }

  return results;
};
module.exports = takeUntil;
