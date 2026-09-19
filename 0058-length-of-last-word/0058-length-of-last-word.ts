function lengthOfLastWord(s: string): number {
    let r=s.trim()
    let count=0
    for(let i=r.length -1;i>=0;i--){
        if(r[i]===" "){
        break
    }
    count++
    }
    return count
};