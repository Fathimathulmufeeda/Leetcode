function reverseWords(s: string): string {
    let r=s.split(" ")
    for(let i=0;i<r.length;i++){
        r[i]=r[i].split("").reverse().join("")
    }
    return r.join(" ")
};