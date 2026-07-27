function numberGame(nums: number[]): number[] {
    nums.sort((a,b)=>a-b)
    let res:number[]=[]
    for(let i=0;i<nums.length;i+=2){
        res.push(nums[i+1])
        res.push(nums[i])
        
    }
    return res
};