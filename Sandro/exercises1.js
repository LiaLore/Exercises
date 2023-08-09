// 1.  Write a program to print "Hello, World!" to the console. 

console.log("1: Hello World!");

// 2. Create a variable and assign a number to it. 
// Print the value of the variable. 

let number = 13;
console.log("2: " +number);

// 3. Write a program to add two numbers and display the result. 

let num1 = 30;
let num2 = 10;
let result = (num1 + num2);
console.log("3: " + result)
console.log(`3a: ${num1 + num2}`);

// 4. Write a program to subtract two numbers and display the result.

console.log(`4: ${num1 - num2}`);

// 5. Write a program to multiply two numbers and display the result. 

console.log(`5: ${num1 * num2}`);

// 6. Write a program to divide two numbers and display the result.

console.log(`6: ${num1 / num2}`);

// 7. Write a program to calculate the remainder of dividing two numbers. 

num2 = 4;
console.log(`7: ${num1 % num2}`);

// 8. Create a variable and assign a string to it. 
// Print the length of the string.

let sent = "I'm a beginer";
console.log("8:" + sent.length); 

// 9. Write a program to concatenate two strings and display the result.

let sent1 = " DGLIUMP";
console.log("9:" + sent + sent);

// 10. Write a program to convert a string to uppercase. 

console.log("10:" + sent1.toUpperCase());

// 11. Write a program to convert a string to lowercase.

console.log("11:" + sent1.toLowerCase());

// 12. Write a program to check if a number is even or odd. 

function isEven(num){
    return num % 2 === 0;
}
console.log("12: " + isEven(number));
console.log("12a: " + isEven(num1));

// 13. Write a program to check if a number is positive, 
// negative, or zero. 


function checkNumbers(num){
    if(num > 0){
        return num + " is a positive number."
    }else if(num < 0){
        return num + " is a negative number."
    }else{
        return num + " is zero."
    }
}
console.log("13: " + checkNumbers(number));

// 14. Write a program to find the maximum of two numbers.

function findLargerNum(a,b){
    if(a > b){
        return  a + " is greater than " + b;
    }else if(a < b){
        return b + " is greater than " + a;
    }else{
        return a + " and " + b + " are the same"
    }
}
console.log("14: " + findLargerNum(number,number));

// 15. Write a program to find the minimum of two numbers. 

function findLargerNum(a,b){
    if(a < b){
        return  a + " is less than " + b;
    }else if(a > b){
        return b + " is less than " + a;
    }else{
        return a + " and " + b + " are the same"
    }
}
console.log("15: " + findLargerNum(number,number));

// 16. Write a program to check if a number is divisible by another number. 

function checkDivisableNum(n1,n2){
    if((n1 % n2) == 0){
        return n1 + " is divisable by " + n2;
    }else{
        return n1 + " is not divisable by " +n2;
    }
}

console.log("16: " + checkDivisableNum(num1, num2));