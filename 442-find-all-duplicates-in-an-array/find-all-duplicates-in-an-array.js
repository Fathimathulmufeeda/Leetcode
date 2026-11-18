/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let seen = new Set();
    let result = [];

    for(let i = 0; i < nums.length; i++) {
        if(seen.has(nums[i])) {
            result.push(nums[i]);
        }
        else {
            seen.add(nums[i]);
        }
    }
    return result;
};