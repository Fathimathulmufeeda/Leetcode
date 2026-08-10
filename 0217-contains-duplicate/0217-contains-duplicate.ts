function containsDuplicate(nums: number[]): boolean {
    let dup=new Set()
    for(let i of nums){
        if(dup.has(i)){
            return true
        }
        dup.add(i)
        
    }
    return false
};