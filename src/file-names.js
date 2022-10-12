const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (!names.length) return []
  const t = []
  const checK = (s, b = false) => t.includes(s) ? b ? checK(s + '(1)'): checK(s.replace(/[0-9]/g, +s.match(/\d+/g)[0] + 1)): t.push(s)
  names.forEach(l => checK(l, true))
  return t
}

module.exports = {
  renameFiles
};
