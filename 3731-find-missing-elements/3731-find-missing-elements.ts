function findMissingElements(nums: number[]): number[] {
    let result: number[] = [];

    let min = Math.min(...nums);
    let max = Math.max(...nums);

    for (let i = min; i <= max; i++) {
        if (!nums.includes(i)) {
            result.push(i);
        }
    }

    return result;
}