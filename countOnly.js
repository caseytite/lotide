const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    // the reason we dont have these in quotes is because item is a variable
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
      console.log(item);
      console.log(results);
    }
  }
  console.log(results);
  return results;
};
module.exports = countOnly;
