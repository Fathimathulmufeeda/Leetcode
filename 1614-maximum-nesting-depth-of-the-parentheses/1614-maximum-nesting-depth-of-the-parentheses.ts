function maxDepth(s: string): number {
    let depth:number=0
    let maxDepth:number=0
    for(let char of s){
        if(char === '('){
            depth++
            maxDepth=Math.max(maxDepth,depth);
        }
        else if(char ===")"){
            depth--
        }
    }
    return maxDepth
};