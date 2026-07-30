function furthestDistanceFromOrigin(moves: string): number {
    let left=0;
    let right=0;
    let empty=0;
    for(let i of moves){
        if(i=="L") left++;
        else if(i=="R") right++;
        else empty++
    }
    return Math.abs(left-right)+empty
  
};