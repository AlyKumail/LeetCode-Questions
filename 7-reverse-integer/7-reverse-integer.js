/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let numRev = parseFloat(x.toString().split('').reverse().join(''))
    if (numRev > 0x7FFFFFFF) {
        return 0;
    }
    if(x < 0)
        return numRev * -1;
    else
        return numRev;
};