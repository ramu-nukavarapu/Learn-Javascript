// Functions are used to execute set of statements whenever it is called by its name in execution

// Functions has two kind of things: function defintion and function call
// function definition has the body the function / set of statements
// function call is actual call to that function to make it executed

// 1 Functions with no parameters
function greetUser() {
    console.log("Hello User!")
}

greetUser()


// 2 Functions with parameters - we can pass as many as we want
function greetUserWithName(name) {
    console.log("Hello "+name+"!")
}

greetUserWithName("ramu")


// return statement is used to return any type of value in response to the completion of a function
// when return statement encounters no other line of code below the return is executed. the function is going to terminated.
// 3 Functions with return statement

function adminValidation(name) {
    if (name === "admin"){
        return true
    }
    return false
}

let isAdminValid = adminValidation("admin")
console.log(isAdminValid)
isAdminValid = adminValidation("admin-ramu")
console.log(isAdminValid)


// 4 Functions with default values
function userGreeting(name = "User") {
    console.log("Hello "+name+"!")
}
userGreeting("Ramu")
userGreeting() // when we do not pass the value while calling the function, it takes the default value as a parameter