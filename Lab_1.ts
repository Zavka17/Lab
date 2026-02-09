enum Currency {
    USD,
    EUR,
    RUB
}

const rates = [
    [Currency.USD, 95],
    [Currency.EUR, 105],
    [Currency.RUB, 1]
];

function maxRate(): number {
    let max = Number.MIN_SAFE_INTEGER;
    for(const rate of rates){
        if(rate[1] > max) max = rate[1];
    }
    return max;
}

console.log(maxRate());