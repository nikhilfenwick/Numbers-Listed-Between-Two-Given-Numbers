// console.log("Hello World!");

// Write a simple function

// 1. this function will take two numbers
// 2. use a for loop that starts at the first number, and ends at the last number
// 3. all numbers between this range of numbers should be added to an array
// 4. return the array with all these numbers

// For example, if the two numbers are 5 and 10
// Then array should have, 6, 7, 8, 9
// For example, if the two numbers are 1 and 10, Then array should have
// 2,3,4,5,6,7,8,9


// Function definition - use curly braces
// Function calling - use semli colon ;
// Parameteres and arguments that are passed to the function
// Return statement that returns the value from the function


function takesTwoNumbers(tomato, potato){
    let lockerDoor = "This function takes two numbers, implements a for loop which starts at the first number and ends at the last number. All nubers between this range will be added to an array, and then returned"
    console.log(lockerDoor);

    // const pretendArray = [6, 7, 8, 9];
    const realArray =  [];

    tomato ++;
    for (let i = tomato; i < potato; i++){
        // console.log(i);
    
    realArray.push(i);

    }

    return realArray;    

}

numberOne = 1;
numberTwo = 10;

let resultFromFunction = takesTwoNumbers(numberOne, numberTwo);
console.log(resultFromFunction);




