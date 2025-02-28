// REST and SPREAD operators are special operators used in javascript. Syntactically both follows the same (...) three dots to perform the operations, but the working is different. (let's say opposite to eachother) 


// SPREAD operator is used to expand collections into individual elements. Mostly used for copying, merging into an array or object and spreading elements into a function call.

// copying an array into another array
let array = [1,2,3]
let newArray = [...array] 
console.log(newArray)

// It creates an copy of the arrray, instead of referencing it. so, the changes in newArray won't appear in the original array.

// merging two arrays into one
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let mergedArray = [...arr1, ...arr2]
console.log(mergedArray)

// spreading the elements into a function call.
let arr = [100, 200, 300]
let max = Math.max(...arr) // max function accepts individual values
console.log(max)


// REST operator is used to binding individual elements into a collection in function calls and destructing elements from collections

// Handling arguments into an collection
function addAll(...numbers){ // Binding elements into a collection.
    let element = 0;
    for (let index = 0; index < numbers.length; index++) {
        element += numbers[index];   
    }
    return element;
}
console.log(addAll(1,2,3,4,5));

// destructing collections
let collection = [1,2,3,4,5]
let [num1, num2, ...remaining] = collection 
// destructures the first two elements into variables and remaining becomes an array with elements except one and two positions.
console.log(num1, num2, remaining)