const colors = ['yellow', 'blue', 'red', 'orange']
let i = 0
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

console.log("")

for (i = 0; i < colors.length; i++) {
    console.log(colors[i]);
};

console.log("")

colors.forEach(Element => console.log(Element));



//How many lines does my for loop and my while loop take?
//3 and 4

//How many lines does my forEach method take?
//1

//What other advantages do using an array method have over a for or a while loop? For example, which method do you find easier to read? Why?
//The array method is alot cleaner to read, it's easier to find the array with inputs. And also easier to add things.

//Can you use an array method on an object? The answer is no. Suppose you have an object with 45 properties. Try to find out (use Google) how you can still console.log those 45 properties with a loop: Looping through the properties of an object. Try this piece of code and use an object with 5 properties for it. Are you iterating now?
//Not realy, you convert the object into an array, after that you can iterate it