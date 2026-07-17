/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let p=0
    let c=0
    for(let i=0;i<nums.length;i++){
        p+=nums[i]
        if(p===0){
            c++
        }
    }
    return c
};