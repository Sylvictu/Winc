const age = 31;
const isFemale = true;
const driverStatus = 'bob'
if (age >= 18 && isFemale == true) {

    console.log("You are alowed to enter.");

}

else if (age < 18) {

    console.log("You are too young to enter.");

}

else {
    console.log("Today is lady's night, come back tommorow")
}

if (driverStatus == 'bob') {
    console.log("You are allowed to drive");
}

else {
    console.log("You are too drunk to drive")
}