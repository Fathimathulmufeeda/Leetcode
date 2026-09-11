function areaOfMaxDiagonal(dimensions: number[][]): number {
     let maxdiagonal = 0;
    let maxarea = 0;
    for (let diagonal of dimensions) {
        let length = diagonal[0];
        let width = diagonal[1];
        let sum = Math.sqrt(length * length + width * width
        );
        if (sum > maxdiagonal) {
            maxdiagonal = sum;
            maxarea = length * width;
        } 
        else if (sum === maxdiagonal) {
            if (length * width > maxarea) {
                maxarea = length * width;
            }
        }
    }
    return maxarea;
};