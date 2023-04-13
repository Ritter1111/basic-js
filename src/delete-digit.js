const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = ("" + n).split("").map(Number);
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    let num = +array
      .slice(0, i)
      .concat(array.slice(i + 1))
      .join("");
    if (num > max) {
      max = num;
    }
  }
  return max;
  //   let myIndex = array.indexOf(minElement);
  //   if (myIndex !== -1) {
  //     array.splice(myIndex, 1);
  // }
  //   return +array.join('');
}

module.exports = {
  deleteDigit,
};
