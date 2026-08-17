function checkPerfectNumber(num: number): boolean {
    let sum = 0;
    let i = 1;

    while (i < num) {
        if (num % i === 0) {
            sum += i;
        }
        i++;
    }

    return sum === num;
}