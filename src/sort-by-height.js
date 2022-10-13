const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 * @param a
 * @param t
 */
// function sortByHeight(/* arr */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

const sortByHeight = (a,t = a.filter(i => i !== -1).sort((a,b) => a - b)) => a.map(i => i !== -1 ? t.splice(0,1)[0]: i)



module.exports = {
  sortByHeight
};
