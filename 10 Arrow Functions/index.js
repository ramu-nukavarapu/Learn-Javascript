// Arrow functions are similar to anonymous functions but there some differences:
    // whenever we use these two in classes they differ by 'this' binding, anonymous functions are dynamically scoped based on the function calling and arrow functions do not have their own this, so they inherit this from the surronding lexical scope
    // Anonymous function can be used as constructor where the arrow function doesn't
    // Anonymous functions are available from the beginning whereas arrow functions are introduced in ES6. 
    // And the syntax is different, here instead there is no 'function' keyword but between the parameter brackets and body starting bracket '{' include '=>' represents the arrow function
    // In arrow functions we don't need to write return explictly, it will automatically return


// Arrow Function assigned to a variable by simply after '=' sign add () => and starts the function body

const greet = () => {
    console.log("Hello")
};

greet(); // call with the reference variable


// Arrow Function assigned to a variable can be immediately invoking by adding the arrow function in '()' and '(params)' {if it has parameters} after the end brace of the function '}'

const greeting = (() => {
    console.log("Hello User!")
})();


// Anonymous Function passing as a parameter to a function call
// assume a function requires a callback which prints the parameters when it is called

function greetUser(name ,printFn){  // It takes user name and calls the printFn callback
    printFn(name)
}

greetUser("ramu", (name) => { // This function call takes anonymous function as a parameter
    console.log("Hello "+name+"!")
})