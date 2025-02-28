// Conditional are used to check the condition is true or false. based on the result, executes a particular block

var value = 10
// simple if - if the conditon is true, the block will execute
if (value > 5){
    console.log(value + " greater than 5")
}

var value = 1
// if else - if the condition is true, if block is executed otherwise else block is executed
if (value > 5){
    console.log(value + " greater than 5")
}else{
    console.log(value + " less than 5")
}

var value = 5
// if else ladder - check the conditions one after other, if any condition is true then executes the particular block otherwise else block is executed 
if (value > 5){
    console.log(value + " greater than 5")
}else if (value < 5){
    console.log(value + " less than 5")
}else{
    console.log(value+ " equal to 5")
}

// Loops are used to iterate/repeat a set of statements/instructions

// 1 for loop
// uses when the no.of iterations are known

for(let number=0; number <= 10; number++){
    console.log(number)
}

// 2 while loop
// uses when the no.of iterations are unknown 

let isValid = true, counter = 0
while (isValid) {
    if (counter == 5){ // here may be the condition is limited to 5 but in runtime it may be 50 or even 5000
        isValid = false
    }
    console.log(counter, isValid)
    counter++
}
