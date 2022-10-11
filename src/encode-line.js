const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let s = ''
    let c = []
    for (let i = 0; i < str.length; i++) {
        if(str[i] === s[s.length - 1]) {
            c[c.length - 1] = c[c.length - 1] + 1
        } else {
            s = s + str[i]
            c.push(1)
        }
    }
    return c.map((it,i) => it > 1 ? it + s[i] : s[i]).join('')
}

module.exports = {
    encodeLine
};
