// taking details of customer using var

var name = "Ramu"
var age = 20
// again if i create name it will be created by js engine
// This is the conflict using the VAR keyword

var name = "Sai" // throws an error


// taking details of customer using let

let name = "Ramu"
let age = 20
// again if i create name it will throw an error
// The conflict using the VAR keyword can rectified using LET

let name = "Sai"  // rectifing the error


// setting server path using const

const path = "localhost/home/details"
//if i re-assign any value to the path variable it throw an error and also for reallocation of same variable

path = "/home/bin" // throws an error