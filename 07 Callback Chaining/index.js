// chaining is a process where one task is called within another task 
// callback chaining is a process where on callback is called within another callback. This is also known as callback hell


// This is how chaining looks like

setTimeout(function(){
    console.log("Hello from First"); // It prints first
    setTimeout(function(){
        console.log("Hello from Second"); // Second
        setTimeout(function(){
            console.log("Hello from Three"); // Third
        },1000);
        console.log("Hello from Second"); // Along with Second
    },1000);
    console.log("Hello from First"); // Along with First
},1000)


// Looks like a hell right, that's why it called callback hell

/*
    The output will look like:

        Hello from First
        Hello from First
        Hello from Second
        Hello from Second
        Hello from Three
*/

// As callbacks are asynchronous, no callback is waiting for completion of other callback
