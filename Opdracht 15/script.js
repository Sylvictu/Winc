//console.log("Making pizza");

const orderPizza = 2;
const orderSushi = 3;

const makePizza = function () {
    console.log("Making pizza");
    console.log("Make pizza base ", orderPizza, "times");
    console.log("Apply tomato sauce and cheese ", orderPizza, "times");
    console.log("Add toppings ", orderPizza, "times");
    console.log("Put in oven ", orderPizza, "times");
};

makePizza();
/*
makePizza();
makePizza();
makePizza();
*/

const makeSushi = function () {
    console.log("Making sushi");
    console.log("Grab dried seaweed", orderSushi, "times");
    console.log("Add rice", orderSushi, "times");
    console.log("Add fish", orderSushi, "times");
    console.log("roll sushi", orderSushi, "times");
}

makeSushi();

