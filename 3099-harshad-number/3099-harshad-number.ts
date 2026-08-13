function sumOfTheDigitsOfHarshadNumber(x: number): number {
    let num=x;
    let dsum=0
    while(num>0){
        dsum+=num%10;
        num=Math.floor(num/10)
    }
    if(x%dsum===0){
        return dsum
    }
    return -1
};