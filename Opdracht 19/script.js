// Part 1 Hey Kiddo
const ageCheck = function (age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    };
};

const agend = function (age) {
    if (ageCheck(age) == true) {
        return "Hello there";
    }
    else {
        return "Hey kiddo";
    }
}
console.log(agend(18));

// Part 2 VAT excercise 1

const vatNone = function (basePrice, vatPercentage) {
    return basePrice * vatPercentage
}

const totalPrice = function (basePrice, vatPercentage) {
    return (vatNone(basePrice, vatPercentage))
}

console.log("The total price including VAT is:", Math.round(totalPrice(1000, 1.20)));


// Part 3 VAT excercise 2

const calculateBasePrice = function(priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21));
