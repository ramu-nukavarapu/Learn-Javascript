// Types are dynamic in js, they can set based on the value that is assigned to it.
// A special operator 'typeof' which tells us the type of the variable/value.

// Primitives

// 1 Numbers
// Both decimal and non-decimal values.

let value = 23 // non-decimal
console.log(typeof value) // logs the type of 'value' in console

value = 37.340 // decimal
console.log(typeof value) // logs the type of 'value' in console
// you can see that both statement's logs the type 'number'. 


// 2 Strings
// Sequence of characters or even a single character within single or double quotes.

let username = "ramu"
console.log(typeof username) // logs the type of 'username' in console

let favLetter = 'H'
console.log(typeof favLetter) // logs the type of 'favLetter' in console


// 3 Boolean
// Either true or false

let isValid = true
console.log(typeof isValid) // logs the type of 'isValid' in console

let isApproved = false
console.log(typeof isApproved) // logs the type of 'isApproved' in console


// 4 Undefined
// when variable is declared but not assigned with any value

let random;
console.log(typeof random) // logs the type of 'random' in console



// Non - Primitives - Are 'object' type

// 1 Arrays
// collection of elements stored in continous memory, accessed by index positions 

let users = ["ramu", "sai", "vinay", "durga"]
console.log(typeof users) // logs the type of 'users' in console


// 2 Objects
// key - value pair. All keys are unique within an object, accessed by keys

let userInfo = {
    name: "ramu",
    age: 20
}
console.log(typeof userInfo) // logs the type of 'userInfo' in console


// 3 Null
// when you want to explicitly make the variable not associated with any type and set it to object type

let something = null
console.log(typeof something) // logs the type of 'something' in console