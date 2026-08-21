function buyChoco(prices: number[], money: number): number {
    let first = Infinity;
    let second = Infinity;

    for (let price of prices) {
        if (price < first) {
            second = first;
            first = price;
        } 
        else if (price < second) {
            second = price;
        }
    }

    let total = first + second;

    if (total <= money) {
        return money - total;
    }

    return money;
}