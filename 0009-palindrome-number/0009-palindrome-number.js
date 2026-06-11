/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let a=x;
    let y=0;
    while(x>0){
        let rev=x%10;
        y=y*10+rev;
        x=Math.floor(x/10);
    }
    return a===y;
};
console.log(isPalindrome(121));