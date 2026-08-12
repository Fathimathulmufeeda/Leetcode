function differenceOfSum(nums: number[]): number {
    let esum = 0;
    let dsum = 0;

    for (let num of nums) {
        esum += num;

        while (num > 0) {
            dsum += num % 10;
            num = Math.floor(num / 10);
        }
    }

    return Math.abs(esum - dsum);
}
