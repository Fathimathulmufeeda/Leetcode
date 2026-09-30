function isAnagram(s: string, t: string): boolean {
    return s.length === t.length && 
           s.split("").sort().join("") === t.split("").sort().join("");
}