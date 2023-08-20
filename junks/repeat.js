// 36. Write a program to find the second largest number in an array.
let array36 = [4, 21, 1, 55, 76, 12, 31];
array36.sort((a, b) => a - b);
// console.log(array36.pop());

// 37. Write a program to check if two arrays are equal. 
let array37 = [2, 8, 98, 70, 45, 2, 45];
let array37a = [2, 8, 98, 70, 45, 2, 45];
let array37b = [2, 8, 98, 70];
function equalsOrNot(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        console.log("It is NOT the same!");
        // return false;
    }
    for (let i = 0; i < array37a.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log("It is NOT the same!");
            // return false
        }
    } 
    console.log("It is the same!");
    // return true
}
// console.log(equalsOrNot(array37, array37a));

// 38. Write a program to find the index of the first occurrence of an element 
//     in an array.
let array38 = [11,2,4,6,"lika","B"];
// console.log(array38.shift());

// 39. Write a program to remove all falsy values from an array.
let array39 = [67,90, "smth", 0, NaN];
// let newArray39 = array39.filter(array39 => { return !!array39 });
let newArray39 = array39.map(item => item === 67 ? false : item).filter(item => !!item);
// console.log("39: " + newArray39);

// 40. Write a program to find the largest element in a multi-dimensional array.

let array40 = [[9, 7, 99, 0], [90, 88, 554, 9], [45, 99, 0, 89]];
// let array40a = array40.reduce((a, b) => [...a, ...b]);
// console.log( Math.max(...array40a));
let newArray40 = array40.reduce((a, b) => [...a, ...b]);
// console.log("40: " + Math.max(...newArray40));

// 41. Write a program to remove all duplicates from an array.
let array41 = [2,34,55,65,34,55,2,443];
let emptyarr = [];
for(const item of array41){
    if(!emptyarr.includes(item)){
        emptyarr.push(item);
    }
}
// console.log(emptyarr);

// 42. Write a program to find the index of the last occurrence of an 
//     element in an array. 
let array42 = [2,34,55,65,34,55,2,443];
// console.log(array42.pop());


// 43. Write a program to merge two sorted arrays into a single 
//     sorted array.
let array43a = [12,65,34,55,2,443];
let array43b = [2,34,55,34,55,];
let array43c = array43a.concat(...array43b); 
// console.log (array43c); // or
// console.log(array43a.concat(...array43b));


// 44. Write a program to sort an array of strings in alphabetical order. 
let array44 = ["a", "c","t", "m", "b"];
// let array44a = array44.reduce((a,b) => a - b);
// console.log(array44.sort())

// 45. Write a program to find the common elements among multiple arrays.
let array45 = [[10, 35, 125, 35, "a"], [40, 10, 125, "a", 50]];
const array45a = array45[0];
const array45Common = array45a.filter(element => array45.every(array => array.includes(element)));
// console.log(array45Common)
// let smth = 2;
// let array45ex = [10, 35, 125, 35, "a", smth];
// console.log(array45ex.includes(smth));


// 46. Write a function that takes a sentence as input and returns 
//     an array of unique words in alphabetical order, 
//     excluding common English words such as "the", "a", and "is".
let array46 = ['God is dead, and we have killed him.'];
// let array46 = ["[12,3,/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''$342,"]// [] <- არ იშლება
function extractUniqueWords(sentence) {
    // Common English words to exclude
    const commonWords = new Set(["the", "a", "and", "is", "have", "him"]);
    // Remove punctuation and convert to lowercase
    const cleanedSentence = sentence.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    // Split the sentence into words
    const words = cleanedSentence.split(' ');
    // Filter out common words and duplicates, then sort alphabetically
    const uniqueWords = Array.from(new Set(words.filter(word => !commonWords.has(word)))).sort();
    return uniqueWords;
  }
  const uniqueWordsArray = extractUniqueWords(array46[0]);
  console.log(uniqueWordsArray);
  

// 47. Write a function that takes a string as input and returns true 
//     if it is a pangram (contains every letter of the alphabet at 
//     least once), false otherwise.


// 48. Write a function that takes an array of objects and a property 
//     name, and returns an array of unique values for that property 
//     across all objects.


// 49. Write a function that takes a string as input and returns an object 
//     containing the count of each character in the string, excluding spaces.


// 50. Write a function that takes a string as input and returns the 
//     longest substring that contains only unique characters. 
//     If there are multiple substrings with the same length, return 
//     the first one you encounter.


// 51. For Loop: 
//     Write a program that prints the even numbers between 1 and 20 
//     using a for loop. 


// 52. Switch/Case:  
//     Write a program that takes a number as input and prints the 
//     corresponding day of the week using a switch/case statement. 
//     For example, if the input is 1, it should print "Sunday."


// 53. While Loop: 
//     Write a program that asks the user to enter a number and keeps 
//     printing "Hello!" that many times using a while loop.



// 54. For Loop: 
//     Write a program that calculates the sum of numbers from 1 to 100 
//     using a for loop and prints the result.


// 55. Switch/Case: 
//     Write a program that takes a month number as input 
//     (1 for January, 2 for February, etc.) and prints the number of 
//      days in that month using a switch/case statement.


// 56. While Loop: 
//     Write a program that asks the user to guess a secret number
//     between 1 and 10. Keep asking for guesses until they guess 
//     correctly using a while loop.



// 57. Switch/Case: 
//     Write a program that takes a grade (A, B, C, D, or F) as input 
//     and prints a corresponding message using a switch/case statement. 
//     For example, if the input is "A," it should print "Excellent!"


// 58. While Loop: Write a program that prompts the user to enter a 
//     password. The program should keep asking for the password until 
//     the correct password is entered. Once the correct password is 
//     entered, display a success message. The correct password is "12345".



// 59. Write a function called sumDigits that takes a number as an argument 
//     and returns the sum of its digits.



// 60. Write a function called countBs that takes a string as its only 
//     argument and returns the number of uppercase "B" characters in 
//     the string.


// 61. Write a function called min that takes two arguments and returns 
//     their minimum.


// 62. Write a function called generateRandomNumber that takes a minimum
//     number and a maximum number as arguments and returns a random 
//     number between the minimum and maximum values (inclusive).



// 63. Write a function called capitalizeWords that takes a sentence 
//     (string) as an argument and returns a new sentence where the 
//     first letter of each word is capitalized.
