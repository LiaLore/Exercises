//  1.Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
//    Sample arguments : 'w3resource.com', 'o'
//    Expected output : 2
// 1. 
function countOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }
    return count;
}

const inputString = 'w3resource.com';
const targetLetter = 'o'; 
// console.log(countOccurrences(inputString, targetLetter));

// 2.
// const result = countOccurrences(inputString, targetLetter);
// console.log(result); // Output: 2

// function countOccurrences(str, letter) {
//     return str.split('').reduce((count, char) => count + (char === letter ? 1 : 0), 0);
// }

// const inputString = 'w3resource.com';
// const targetLetter = 'o'; // output: 2

// const result = countOccurrences(inputString, targetLetter);
// console.log(result);

// 3.
// function countOccurrences(str, letter) {
//     return str.split('').filter(char => char === letter).length;
// }

// const inputString = 'w3resource.com';
// const targetLetter = 'r';

// const result = countOccurrences(inputString, targetLetter);
// console.log(result); // Output: 2

// 2. Write a JavaScript function to apply the Bubble Sort algorithm.
//    Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
//    Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function bubbleSort(arr) {
    return arr.sort((a, b) => a - b);
}

const sampleArray = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223,
                    455, 23, 234, 213];
const sortedArray = bubbleSort(sampleArray);
// console.log(sortedArray.reverse());

//3. Write a JavaScript function that accepts a list of country names 
// as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", 
// "United States of America"])
// Expected output : "United States of America"

let countries = ["Australia", "Germany", "United States of America"]

function longestCanNam(country){
    let one = country[0].length;
    let two = country[1].length;
    let three = country[2].length;
    if(one > two && one < three ||
        one < two && two < three){
            console.log(country[2] + " is the longest name");
        }else if(one < two && two > three){
            console.log(country[1] + " is the longest name");
        }else{
            console.log(country[0] + " is the longest name");

        }
}

// longestCanNam(countries);

// chatGPT version
function Longest_Country_Name(countryList) {
    let longestName = '';
    for (let i = 0; i < countryList.length; i++) {
        if (countryList[i].length > longestName.length) {
            longestName = countryList[i];
        }
    }
    return longestName;
}

// const countries = ["Australia", "Germany", "United States of America"];
const longestCountry = Longest_Country_Name(countries);
// console.log(longestCountry); 

//4. Write a JavaScript function that takes an array of numbers and 
//   finds the second lowest and second greatest numbers, respectively.
//   Sample array : [1,2,3,4,5]
//   Expected Output : 2,4

let arr4 = [1, 55,77,54,89,99];
arr4.sort((a,b)=> a - b);
// console.log(arr4);
function secondNum(arr){
    let emptyarr = [];
    emptyarr.push(arr[1],arr.pop());
    return emptyarr;
}

// console.log(secondNum(arr4))


// ChatGPT version 

// Your approach is mostly correct, but there's a small issue in your
// code when you're trying to get the second greatest number. 
// Let me help you fix that and also provide a more efficient solution:

// javascript
// Copy code
// function secondNumbers(arr) {
//     arr.sort((a, b) => a - b);
//     const secondLowest = arr[1];
//     const secondGreatest = arr[arr.length - 2];
//     return [secondLowest, secondGreatest];
// }

// const arr4 = [1, 55, 77, 54, 89, 99];
// const result = secondNumbers(arr4);
// console.log(result); 


// 5. Write a JavaScript function that accepts a string as a parameter
//    and converts the first letter of each word into upper case.
//    Example string : 'the quick brown fox'
//    Expected Output : 'The Quick Brown Fox '

const inputSentence = "the quick brown fox";
function capitalizeWords(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => {
      if (word.length === 0) {
        return word;
      } else {
        const firstLetter = word[0].toUpperCase();
        const restOfWord = word.slice(1);
        return firstLetter + restOfWord;
      }
    });
    return capitalizedWords.join(' ');
  };
// console.log(capitalizeWords(inputSentence));


// 6. Write a JavaScript function that returns a string that has letters
//    in alphabetical order.
//    Example string : 'webmaster'
//    Expected Output : 'abeemrstw'
let string6 = 'webmaster';
// console.log([...string6].sort().join('')) // without function
function str6 (str){
    return [...str].sort().join('');
}
// console.log(str6(string6)) // with function

// 7.Write a JavaScript function that generates all combinations of a 
//   string.
//   Example string : 'dog'
//   Expected Output : d,do,dog,o,og,g


// 8. Write a JavaScript function to find the first not repeated character.
//    Sample arguments : 'abacddbec'
//    Expected output : 'e'



// 9. Find the Maximum Subarray Sum: Write a function that takes an array 
//    of integers as input and finds the contiguous subarray within the 
//    array that has the largest sum. Return the sum of that subarray. 
//    For example, given the array [-2, 1, -3, 4, -1, 2, 1, -5, 4], 
//    the function should return 6, which corresponds to the sum of the
//    subarray [4, -1, 2, 1].


// 10. Rotate Array: Write a function that rotates an array of n elements 
//     to the right by k steps. For example, given the array [1, 2, 3, 4, 
//     5, 6, 7] and k = 3, the function should modify the array to become 
//     [5, 6, 7, 1, 2, 3, 4].


// 11. Find Missing Number: Given an array containing n distinct numbers 
//     taken from 0, 1, 2, ..., n, find the missing number. For example, 
//      given the array [3, 0, 1], the function should return 2.


// 12. Merge Intervals: Given an array of intervals, merge overlapping 
//     intervals and return the resulting merged intervals. For example,
//     given the intervals [[1,3],[2,6],[8,10],[15,18]], the function 
//     should return [[1,6],[8,10],[15,18]].