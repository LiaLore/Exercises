// 17. Write a program to check if a string is empty or not. 

let str = "string is not empty";
function checkEmptyString(string){
    if (string.length === 0){
        return 'string is empty'
    }else{
        return 'string is not empty'
    }
} 
console.log(checkEmptyString(str));


// 18. Write a program to check if a string contains a 
// specific word.

console.log(str.includes("smth"));


// 19. Print the numbers from 1 to 10 in the console. 

for(let i = 0; i <= 10; i++){
    console.log(i)
}


// 20. Write a program to check if a number is prime or not. 
// 1

function checkPrime(num){
    if(num === 1){
        return false;
    }else if(num === 2){
        return true;
    }else{
        for (let num1 = 2; num1 < num; num1++){
            if (num % num1 === 0){
                return false;
            }
        }
        return true;
    }
}
console.log(checkPrime(13))


// Write a program to reverse a string (GOOGLE)

function reverseStr(str){
    return str.split("").reverse().join("");
}
console.log("reverse: " + reverseStr("dgliump"));
// 2
function reverseStr1(str){
    let newStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}
console.log("reverse: " +  reverseStr1("esrever"));
// 3
function reverseString(str){
    if(str === ""){
        return "";
    }else{
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}
console.log("reverse: " + reverseString("Hello World!"));


// 22. Write a program to find the sum of all numbers in an array. 

let array = [12,3,4,43,5];
let sum = 0;
for(let i = 0; i < array.length; i++){
    sum += array[i];
}
console.log(sum);


// 23. Write a program to find the average of numbers in an array. 

let array1 = [12,3,4,43,5];
let sum1 = 0;
for(let i = 0; i < array1.length; i++){
    sum1 += array[i];
}
console.log("Array avarage is: " +
 sum1 / array1.length);


// 24. Write a program to remove duplicates from an array. 

function removeDuplicates(){
    let array2 = [12,3,33,4,33,5,43,5];
    const newArr = array2.filter((obj, index) => {
        return index === array2.findIndex(numberArr => obj === numberArr)
    });
    return newArr;
}
console.log(removeDuplicates());


// 25. Write a program to sort an array of numbers in ascending order. 

let numsArr = [1,9,99,4,231];
console.log("correct increase:", numsArr.sort((a,b)=>{return a-b}))
// console.log("wrong:", numsArr.sort()); 


// 26. Write a program to find the largest element in an array.

// 1. (it's working but WHY??) 
for (i = 0; i <= numsArr.length; i++){
    if(numsArr[i] > i){
        largest = numsArr[i]; 
    }
}
console.log(largest); // განსაზღვრული არ არის და რატომ არ აერორებს??
// 2. 
let largest1 = 0;
for (let i = 0; i <= numsArr.length; i++){
    if(numsArr[i] > largest1){
        largest1 = numsArr[i];
    }
}
console.log(largest1);
// 3.
let lrgst = Math.max(...numsArr);
console.log(lrgst);


// 27. Write a program to find the smallest element in an array.

let smllr = Math.min(...numsArr);
console.log(smllr);


// 28. Write a program to check if an array contains a specific element.

console.log(numsArr.includes(231 && 3));


// 29. Write a program to remove an element from an array. 

// 1
let removeEl =  numsArr.slice(0,2)
console.log(removeEl)
// 2
removeEl = numsArr.splice(1);
console.log(removeEl);


// 30. Write a program to count the number of occurrences 
// of a specific element in an array. 

let newArr = [8,67,56,3,4,3,87,56,5,56];
console.log(newArr.filter(x => x ===56).length);


// 31. Write a program to find the length of the longest word in a sentence.
// მჭირდება ახსნა! 

let longWord = "Hello Dgliump";
function findLongWord(sentence){
    let longestWord = sentence.split(' ').reduce(function(longest, currentWoord){
        return currentWoord.length > longest.length ? currentWoord : longest;
    },"");
    return longestWord.length;
}
console.log(findLongWord(longWord))



// 32. Write a program to check if a string is a palindrome.
// I need to find shorter way to solve this task!! 

const btn = document.getElementById("btn");
btn.addEventListener("click", callCheckBTN);
function palindrome(string){
    let length = string.length;
    for(let i = 0; i <= length/2; i++){
        if(string[i] !== string[length-1-i]){
            return 'It is not a palindrome.';
        }
    }
    return 'It is a palindrome';
}
function callCheckBTN(){
    let string1 = prompt("Enter a string: ");
    let value = palindrome(string1);
    console.log(value);
    palindrome(string1);
}
 
// 33. Write a program to capitalize the 
// first letter of each word in a sentence. (youtube video)
let upperCaseString = "hello world!";
function capitalLetter(sentence){
    let str = sentence.split(" ");
    for(let i = 0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}
console.log(capitalLetter(upperCaseString));


// 34. Write a program to find the sum of all 
// even numbers in an array. 

let arr1 = [20,87,9,90,45];
function evenSum(arr){
    for( let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0){
            return arr[i]
        }
    }
    console.log(arr[i])
}
console.log(evenSum(arr1))

// 35. Write a program to reverse the order of words in a sentence. 

let reverseWords = "programing! love I";
let reverseArr = reverseWords.split(' ');
console.log(reverseArr.reverse().join(" "))
// console.log(reverseArr.join(" "))
