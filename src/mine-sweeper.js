const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
const minesweeper = a => a.map((z,iz) => z.map((q,qz) => q ? 1 : [z[qz - 1] || false, z[qz + 1] || false, iz > 0 && a[iz - 1][qz - 1] || false, iz > 0 && a[iz - 1][qz] || false, iz > 0 && a[iz - 1][qz + 1] || false, iz < a.length - 1 && a[iz + 1][qz - 1] || false, iz < a.length - 1 && a[iz + 1][qz] || false, iz < a.length - 1 && a[iz + 1][qz + 1] || false ].reduce((a,b) => a + b)))

module.exports = {
  minesweeper
};
