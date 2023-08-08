// Exercise 17
let str = "string is not empty";
function checkEmptyString(string){
    if (string.length === 0){
        return 'string is empty'
    }else{
        return 'string is not empty'
    }
} 
console.log(checkEmptyString(str));
// Exercise 18
console.log(str.includes("smth"));
// Exercise 19
for(let i = 0; i <= 10; i++){
    console.log(i)
}
// Exercise 20 (დავგუგლე, არ ვიცოდი)
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
//Exercise 21 (დავგუგლე)
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
//Exercise 22
let array = [12,3,4,43,5];
let sum = 0;
for(let i = 0; i < array.length; i++){
    sum += array[i];
}
console.log(sum);
//Exersice 23
let array1 = [12,3,4,43,5];
let sum1 = 0;
for(let i = 0; i < array1.length; i++){
    sum1 += array[i];
}
console.log("Array avarage is: " +
 sum1 / array1.length);
//Exercise 24 (დავგუგლე)
function removeDuplicates(){
    let array2 = [12,3,33,4,33,5,43,5];
    const newArr = array2.filter((obj, index) => {
        return index === array2.findIndex(numberArr => obj === numberArr)
    });
    return newArr;
}
console.log(removeDuplicates());
// Exercise 25
let numsArr = [1,9,99,4,231];
console.log("correct increase:", numsArr.sort((a,b)=>{return a-b}))
// console.log("wrong:", numsArr.sort()); 
// Exercise 26
// 1 it's working (but WHY??) 
for (i = 0; i <= numsArr.length; i++){
    if(numsArr[i] > i){
        largest = numsArr[i]; 
    }
}
console.log(largest); // განსაზღვრული არ არის და რატომ არ აერორებს??
// 2 
let largest1 = 0;
for (let i = 0; i <= numsArr.length; i++){
    if(numsArr[i] > largest1){
        largest1 = numsArr[i];
    }
}
console.log(largest1);
// 3
let lrgst = Math.max(...numsArr);
console.log(lrgst);
// Exercise 27
let smllr = Math.min(...numsArr);
console.log(smllr);
// Exercise 28
console.log(numsArr.includes(231 && 3));
//Exercise 29
// 1
let removeEl =  numsArr.slice(0,2)
console.log(removeEl)
// 2
removeEl = numsArr.splice(1);
console.log(removeEl);
//Exercise 30 (google)
let newArr = [8,67,56,3,4,3,87,56,5,56];
console.log(newArr.filter(x => x ===56).length);
// Exercise 31 (I will do it later)

// let lWord = "Write a program to find the length of the longest word in a sentence.";
// let longestWord = 0;
// let longWord = (word)=>{
//     for(let i = 0; i < word.length; i++){
//         if(lWord[i].length > longestWord){
//             longestWord = word[i].length;
//         }
//         return longestWord;
//     }
// }
// console.log(longWord(lWord))

// function findLongestWord(str){
//     // let stringSplit = str.split('');
//     let longestWord = str.split('').reduce(function(a,b){
//         return b.length > a.length ? b : a;
//     });
//     return longestWord.length;
// }
// console.log(findLongestWord(lWord))

// Exercose 32
function palindrome(string){
    let length = string.length;
    for(let i = 0; i <= length/2; i++){
        if(string[i] !== string[length-1-i]){
            return 'It is not a palindrome.';
        }
    }
    return 'It is a palindrome';
}
// let string = prompt("Enter a string: ");
let value = palindrome(string);
console.log(value);
// Exercise 33
