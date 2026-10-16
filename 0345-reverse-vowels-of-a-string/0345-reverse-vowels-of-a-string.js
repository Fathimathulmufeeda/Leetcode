/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vow=["A","E","I","O","U","a","e","i","o","u"]
    let arr=s.split("")
    let va=[]
    for(let i=0;i<arr.length;i++){
        if(vow.includes(arr[i])){
            va.push(arr[i])
        }
    }
   for(let i=0;i<arr.length;i++){
    if(vow.includes(arr[i])){
        arr[i]=va.pop()
    }
   }
   return arr.join("")
};