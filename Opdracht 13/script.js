const age = 31;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Bram";
const totalAmount = 50;
if (age >= 18 && isFemale == true) {

    console.log("You are alowed to enter.");

}

else if (age < 18) {

    console.log("You are too young to enter.");

}

else {
    console.log("Today is lady's night, come back tommorow")
}

if (driverStatus == "bob") {
    console.log("You are allowed to drive");
}

else {
    console.log("You are too drunk to drive");
}

if (age >= 18 && age <= 25) {
    console.log("You get a 50% discount");
}

if (firstName === "Bram" || firstName === "Sarah") {
    console.log("You get a free bear!");
}

if (totalAmount >= 25 && totalAmount < 50) {
    console.log("You get a portion of free (vegie) bitterballen");
}

else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("You get a free portion of nachos");
}

else if (totalAmount >= 100) {
    console.log("You get a free bottle of champagne");
}
