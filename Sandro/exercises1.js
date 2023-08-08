//exercise 1
console.log("1: Hello World!");
//exercise 2
let number = 13;
console.log("2: " +number);
// exercise 3
let num1 = 30;
let num2 = 10;
let result = (num1 + num2);
console.log("3: " + result)
console.log(`3a: ${num1 + num2}`);
//Exercise 4 
console.log(`4: ${num1 - num2}`);
//Exercise 5 
console.log(`5: ${num1 * num2}`);
//Exercise 6
console.log(`6: ${num1 / num2}`);
//Exercise 7 
num2 = 4;
console.log(`7: ${num1 % num2}`);
// exercise 8
let sent = "I'm a beginer";
console.log("8:" + sent.length); 
// exercise 9
let sent1 = " DGLIUMP";
console.log("9:" + sent + sent);
// exercise 10
console.log("10:" + sent1.toUpperCase());
// exercise 11
console.log("11:" + sent1.toLowerCase());
// exercise 12
function isEven(num){
    return num % 2 === 0;
}
console.log("12: " + isEven(number));
console.log("12a: " + isEven(num1));
//exersice 13
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
// exercise 14
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
// exercise 15
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
//exercise 16
function checkDivisableNum(n1,n2){
    if((n1 % n2) == 0){
        return n1 + " is divisable by " + n2;
    }else{
        return n1 + " is not divisable by " +n2;
    }
}
console.log("16: " + checkDivisableNum(num1, num2));