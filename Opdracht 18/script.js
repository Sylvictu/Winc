function squaredOne(num1, num2) {
    const squared1 = num1 * num1;
    const squared2 = num2 * num2;
    const added = squared1 + squared2;
    return added * added;

}

const squaredTwo = function (num1, num2) {
    const squared1 = num1 * num1;
    const squared2 = num2 * num2;
    const added = squared1 + squared2;
    return added * added;
};

const squaredThree = (num1, num2) => {
    const squared1 = num1 * num1;
    const squared2 = num2 * num2;
    const added = squared1 + squared2;
    return added * added;
};

console.log(squaredOne(1, 1));
console.log(squaredTwo(1, 1));
console.log(squaredThree(1, 1));