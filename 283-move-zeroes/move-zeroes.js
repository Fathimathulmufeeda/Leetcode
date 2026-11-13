/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let res=[];
    let z=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            res.push(nums[i]);
        }
        else{
            z.push(nums[i]);
        }
    }
    let result=res.concat(z);
    for(let i=0;i<result.length;i++){
        nums[i]=result[i]
    }
};