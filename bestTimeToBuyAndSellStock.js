var maxProfit = function (prices) {
    let doneBuying = false;
    let lowestPrice = 0;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        let buyPrice = prices[i];
        doneBuying = true;
        lowestPrice = buyPrice;

        for (let j = i + 1; j < prices.length; j++) {
            let sellPrice = prices[j];

            if (doneBuying) {
                let profit = sellPrice - lowestPrice;
                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            }
        }
    }

    return maxProfit;
};