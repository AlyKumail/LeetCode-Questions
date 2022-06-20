/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let revX = x.toString().split('').reverse().join('');
    if(revX == x)
            return true;
    return false;
};