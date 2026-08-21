function buyChoco(prices: number[], money: number): number {
    prices.sort((a, b) => a - b);

    let min = Infinity;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {

            let total = prices[i] + prices[j];

            if (total <= money && total < min) {
                min = total;
            }
        }
    }

    if (min === Infinity) {
        return money;
    }

    return money - min;
}