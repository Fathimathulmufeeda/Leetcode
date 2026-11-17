/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(item of words){
        if(item.split("").reverse().join("")===item){
        return item 
        }
    }    
    return ""
};