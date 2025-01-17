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
