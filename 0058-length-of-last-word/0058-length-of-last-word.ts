function lengthOfLastWord(s: string): number {
    let r=s.trim().split(" ")
    return r[r.length -1].length
};