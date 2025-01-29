// The function expressions can be anonymous and also be named. These are used for more controlled and contextual use
// These are differentiated ad non-hoisted which means it can be used only after the declaration and if you use before the function it will throw an error


// Named Function expressions which means the traditional function is assigned to a variable and that can be called after the function definition block only
// By named function expressions, we can call the  function recursively in the function body and if it throws an error it will show the stack trace by its name

// greet(); --> here throws error, as it is called before the function body 

const greet = function greeting(){
    console.log("Hello World!")
}

greet();


// Anonymous Function Expressions which means an anonymous function is assigned to a variable that can be called after the function definition block only
// And usually used for callback purposes. It works same as the anonymous function works

const greeting = function(){
    console.log("Hello World!")
}

greeting(); 