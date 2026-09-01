function differenceOfSums(n: number, m: number): number {
    let div=0
    let notdiv=0
    for(let i=1;i<=n;i++){
        if(i%m==0){
            div+=i
        }
        else{
            notdiv+=i
        }
    }
    return notdiv-div
};