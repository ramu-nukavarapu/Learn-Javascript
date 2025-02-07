// async and await keywords are built on promises that allow you to aynchronous code in synchronous looking manner.
// async makes a function asynchoronous and return a promise
// await pauses the function's execution until the promise resolves or rejects

// By this way, we can avoid the promise chaining and easier to debug.


const fetchData = async () =>{
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const jsonData = await data.json()

    console.log(jsonData)
}

fetchData()

// await function must be write inside the async function
const data = await fetch("https://jsonplaceholder.typicode.com/posts/20")
console.log(data);
// throws error

// if you want to use the await within the global scope, set type="module" in script tag or in package.json
