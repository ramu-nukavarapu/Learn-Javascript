// Anonymous functions are functions that have no name, which are ideal for short term tasks, and it cannot be directly referenced by a name so it is assigned to a variable or pass as a function
// This anonymous functions can also be initialized to variable called function expressions.


// Anonymous Function assigned to a variable by simply after '=' sign add the function with name

const greet = function() {
    console.log("Hello")
};

greet(); // call with the reference variable


// Anonymous Function assigned to a variable and immediately invoking by adding '(params)' {if it has parameters} after the end brace of the function '}'

const greeting = function() {
    console.log("Hello User!")
}();


// Anonymous Function passing as a parameter to a function call
// assume a function requires a callback which prints the parameters when it is called

function greetUser(name ,printFn){  // It takes user name and calls the printFn callback
    printFn(name)
}

greetUser("ramu", function(name){ // This function call takes anonymous function as a parameter
    console.log("Hello "+name+"!")
})