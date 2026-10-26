/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n=new Set(nums)
    let r=[]
    for(let i=1;i<=nums.length;i++){
        if(!n.has(i)){
            r.push(i)
        }
    }
    return r
};