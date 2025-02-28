// Higher order functions are functions that either takes function as a parameter or returns a function as a result.
// Common Higher order functions in javascript.


// .map() – Transforming Elements in an Array, creates a new array by applying a function to each element of the original array. It does not modify the original array.

let numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2); // doubles each value in the original array
console.log(doubled); 


// .filter() – Filtering Elements in an Array, creates a new array containing only elements that satisfy a given condition. It does not modify the original array

numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0); // filters the even numbers from the array.
console.log(evenNumbers);


// .reduce() – Reducing an Array to a Single Value, iterates through an array and reduces it to a single value. Useful for calculations like sums, averages, etc..

numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0); // adds all elements in the array and return the final value.
console.log(sum);


// .forEach() – Iterating Over an Array, executes a function once per element. Does not return a new array (unlike .map()).

numbers = [10, 20, 30];

numbers.forEach(num => console.log(num)); //iterates over the array


// .sort() – Sorting Elements in an Array, sorts elements alphabetically (by default). Modifies the original array.

numbers = [40, 100, 1, 5, 25, 10];

numbers.sort((a, b) => a - b); // ascending order
console.log(numbers); 

numbers = [40, 100, 1, 5, 25, 10];

numbers.sort((a, b) => b - a); // descending order
console.log(numbers); 


// .find() – Finding an Element in an Array, returns the first element that matches a condition. If no match is found, it returns undefined.

numbers = [5, 12, 8, 130, 44];

const firstGreaterThan10 = numbers.find(num => num > 10);
console.log(firstGreaterThan10); // Output: 12

