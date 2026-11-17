/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max=0
    for(item of sentences){
        let count=item.split(" ").length;
        if(count>max){
            max=count
        }
    }
    return max
};