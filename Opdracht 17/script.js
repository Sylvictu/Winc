const numberSize = function (number) {
    if (number > 100) {
        return true;
    }
    else return false;
}

console.log(numberSize(110));

const bouncer = function (maxEntry, currentEntry, age) {
    if (currentEntry >= maxEntry) {
        return "The club is full";
    }
    else if (age < 21) {
        return "You are too young to enter"
    }
    else {
        return "Welcome, hope you have a nice night."
    }
};

console.log(bouncer(100, 101, 21));

const averageNumber = function (num1, num2, num3, num4, num5) {
    const total = num1 + num2 + num3 + num4 + num5;
    const average = total / 5;
    return Math.round(average);

}

console.log(averageNumber(100, 52, 25, 515, 5));