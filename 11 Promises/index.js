// to get rid of from the callack hell, JS introduces promises
// Promises is an object that helps you to handle asynchronous operations, it allows you to handle success or failure more cleanly
// In callback functions, we need to pass the callback to that function, But in promises, we don't need to send the callback, the promise returns sucess or failure based on the operations performed by the promise then you can call the callbacks based on success or failure.


// Promise two phases: Promise creation, Handling Promise Usuage (Some builtin functions returns promises)


// Promise Creation, It takes a function which takes two callbacks resolve and reject, if the operation return success, we need to call resolve else reject. we can also pass only resolve or reject based our usecase.

let val = 5
const data = new Promise((resolve, reject)=>{
    if (val%2 == 0){
        resolve("value is divisible by 2.")
    }else{
        reject("value is not divisible by 2.")
    }
})


// Promise Handling involves mainly two methods then and catch, if the promise returns resolve then it will invoke then else it will invoke catch
// as we know these are the methods of promise and promise is a object. we need to access the methods of an object using dot(.) operator

data
.then(result=>{console.log(result)})
.catch(error => {console.log(error)})


// Asynchronous example

let toggle = true
const isToggle = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (toggle){
            resolve(!toggle)
            
        }else{
            reject(!toggle)
        }
        
    }, 3000)
})

isToggle
.then(result =>{console.log(result)})
.catch(error=>{console.log(error)})

