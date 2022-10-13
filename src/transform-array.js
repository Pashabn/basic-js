const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform(arr) {
    throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
}
// const a = '--double-prev'
// const b = '--double-next'
// const c = '--discard-next'
// const d = '--discard-prev'
// const e = ''
// const transform = arr => {
// if(!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!')
//
// //arr instanceof Array ? arr.map((it,i,arr) => arr[i-1] === c ? e : arr[i+1] === d ? e : it ).filter(it => ![c,d,e].includes(it)).map((it,i,arr) => it === a ? arr[i-1] || e : it === b ? arr[i+1] || e : it) : Error('arr parameter must be an instance of the Array!')
//     const check = (ar, it, i) => {
//         if (it === a) ar.splice(i, 1, ar[i - 1])
//         if (it === b) ar.splice(i, 1, ar[i + 1])
//         if (it === c) ar.splice(i, 2)
//         if (it === d) ar.splice(i - 1, 2)
//         fin(ar)
//     }
//
//     function fin(ar) {
//         const a = JSON.parse(JSON.stringify(ar))
//         a.forEach((it, i) => typeof (it) === 'string' && check(a, it, i))
//         return a
//     }
//
//     return fin(arr)
// }


module.exports = {
    transform
};
