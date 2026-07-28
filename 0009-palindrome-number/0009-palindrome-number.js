/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev = 0;
    let dup = x;
    while(x>0){
        let ld = x % 10;
        rev = (rev*10) + ld;
       x = Math.floor(x/10);
    }

    return dup === rev;
};