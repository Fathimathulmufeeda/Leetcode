function checkPerfectNumber(num: number): boolean {
    let r=0
    for(let i=1;i<num;i++){
        if(num%i==0){
            r+=i
        }
    }
    return r===num
};