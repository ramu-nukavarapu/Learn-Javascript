// fetch API is a modern javascript feature used for making http requests. It allows you to interact with servers and retrieve or send data.
// fetch API is promise based method means it returns a promise as result
// It also supports JSON parsing, streaming and handling cors policies

// fetch also has two phases: fetch call and Handling fetch result


// fetch calling and handling
// The first way is used when there are multiple lines of code in the first then(), we need to return the output to next then()

fetch("https://jsonplaceholder.typicode.com/posts/")
.then(response=>{
    return response.json()
})
.then(data=>{
    console.log(data);
});


// The second way uses flexibility of arrow functions which is implicit return if there is single line of code in the body
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
