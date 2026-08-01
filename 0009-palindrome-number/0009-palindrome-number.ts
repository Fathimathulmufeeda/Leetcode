function isPalindrome(x: number): boolean {
    let original=x
    let rev=0
    while(x>0){
       let rem=x%10
        rev=rev*10+rem
        x=Math.floor(x/10)
        
    }
    return original==rev
};