// 36. Write a program to find the second largest number in an array.
let array36 = [1,32,123,43,75,45,7];
array36.sort((a,b) => a - b).pop();
// console.log(array36);
let secondLargestNumber = 0;
for(let i = 0; i <= array36.length; i++){
    if(array36[i] > secondLargestNumber){
        secondLargestNumber = array36[i];
    }
}
console.log("36: " + secondLargestNumber);

//NOTE:  I need to try to put all those numbers in a new array.

// 37. Write a program to check if two arrays are equal. 

let array37 = [10,35,125,35,40,40,125,50];
let findDublicates = array37 => array37.filter((item, index) => array37.indexOf(item) !== index);
// let dubEl = findDublicates(array37);
// console.log(dubEl);
console.log("37: " + findDublicates(array37));

// 38. Write a program to find the index of the first occurrence of an element 
//     in an array.
let array38 = [10,35,125,35,40,40,125,50];
console.log(array38.shift());

// 39. Write a program to remove all falsy values from an array.
let array39 = [ "smth", 78, 0, NaN];
// array39[2] = "0"; 
// how can I leave 0 in an array like a number??
let newArray39 = array39.filter(array39 => { return !!array39});
console.log("39: " + newArray39);

// 40. Write a program to find the largest element in a multi-dimensional array.
let array40 = [[9,7,99,0], [90,88,554,9],[45,99,0,89]];
let newArray40 = array40.reduce((a,b)=>[...a,...b]);
console.log("40: " + Math.max(...newArray40));

// 41. Write a program to remove all duplicates from an array. (google)
let array41 = [10,35,125,35,40,40,35,125,50];
function removeDub (arr){
    let unique = arr.reduce(function(acc, curr){
        if(!acc.includes(curr))
        acc.push(curr);
        return acc;
    },[]);
    return unique;
}
console.log(`41: ${removeDub(array41)}`);

//42. Write a program to find the index of the last occurrence of an 
//    element in an array. 
let array42 = [10,35,125,35,40,40,125,50];
console.log(array42.pop());

// 43. Write a program to merge two sorted arrays into a single 
//     sorted array.
let array43 = [10,35,125,35];
let array43a = [40,40,125,50];
// let newArray43 = array43.reduce((a,b)=>[...a,...b]);
console.log(array43.concat(array43a));

//44. Write a program to sort an array of strings in alphabetical order. 
let array44 = ["one","two","three","four","five"];
console.log(array44.sort());

//45. Write a program to find the common elements among multiple arrays.
let array45 = [[10,35,125,35,"a"],[40,10,125,"a",50]];
let array45a  = array45.reduce((a,b)=>[...a,...b]);

const toFindDuplicates = array45a => array45a.filter((item, index) => array45a.indexOf(item) !== index)
const duplicateElements = toFindDuplicates(array45a);
console.log("45: " + duplicateElements);


// 46. Write a function that takes a sentence as input and returns 
//     an array of unique words in alphabetical order, 
//     excluding common English words such as "the", "a", and "is".

let array46 = `Write a function that takes a sentence as input and returns an array of unique words in alphabetical order, excluding common English words such as "the", "a", and "is".`
let array46a = array46.split(' is ').toString().split(' a ').toString().split(' the ').toString().split(' an ').toString();

console.log(array46a);
// NOTE: I know it's not best way to solve this task, but... I will work about it later. :) :) 
//       p.s. its not a function eather.. 

// 47. Write a function that takes a string as input and returns true 
//     if it is a pangram (contains every letter of the alphabet at 
//     least once), false otherwise.
//(GOOGLE)

let btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    str = prompt("Enter the sentence: ");
    // let stra = "asdadsdasd";
    // const str = 'We promptly judged antique ivory buckles for the next prize';
    const isPangram = (str = '') => {
       str = str.toLowerCase();
       const { length } = str;
       const alphabets = 'abcdefghijklmnopqrstuvwxyz';
       const alphaArr = alphabets.split('');
       for(let i = 0; i < length; i++){
          const el = str[i];
          const index = alphaArr.indexOf(el);
          if(index !== -1){
             alphaArr.splice(index, 1);
          };
       };
       return !alphaArr.length;
    };
    console.log(isPangram(str));
})
// Note: I need to read it carefully later!!  

// 48. Write a function that takes an array of objects and a property 
//     name, and returns an array of unique values for that property 
//     across all objects.

let array48 = [{
    firstName: "Lika",
    lastName: "Lore",
},{
    country: "USA",
    city: "Wilton",
}];
console.log("48: " +array48);
console.log("48: " +array48[1]);
console.log("48: " +array48[1].city);


// It's not a function!!

// 49. Write a function that takes a string as input and returns an object 
//     containing the count of each character in the string, excluding spaces.

let string49 = "I am Lia and kal b b bdsds dadmv,bdfertrtrhgsfdfv, lopqe sdafsgdjfl mznxbvcz";
let countABC = "b";

function countChar (string,count){
    let result = 0;
    for (let i = 0; i < string.length; i++){
        if (string.charAt(i) == count) 
        result++
    }
    return result;
}
console.log(countChar(string49,countABC));

// 50. Write a function that takes a string as input and returns the 
//     longest substring that contains only unique characters. 
//     If there are multiple substrings with the same length, return 
//     the first one you encounter.



function findUniqueChar(){
    let string50 = "return the first one you encounter."
    // string50.slice(" ").toString();
    string50 = string50.split("the");
    // string50 = new Set(string50); // I need to learn more about it!!
    string50 =[...string50].join("");
    console.log(string50);
}
console.log(findUniqueChar());


// 51. For Loop: 
//     Write a program that prints the even numbers between 1 and 20 
//     using a for loop. 

let nums51 = [];
for (let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        nums51.push(i)
    }
    // return nums51;
}
console.log(nums51)

// 52. Switch/Case:  
//     Write a program that takes a number as input and prints the 
//     corresponding day of the week using a switch/case statement. 
//     For example, if the input is 1, it should print "Sunday."

let day;
switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;   
    case 2:
        day = "Tuesday";
        break;    
    case 3:
        day = "Wednesday";
        break;    
    case 4:
        day = "Thursday";
        break;    
    case 5:
        day = "Friday";
        break;    
    case 6:
        day = "Saturday";
        break;
}
console.log("Today is " + day);

//NOTE: I need to learn more about it!! 

// 53. While Loop: 
//     Write a program that asks the user to enter a number and keeps 
//     printing "Hello!" that many times using a while loop.

let btn53 = document.getElementById("btn53");
btn53.addEventListener("click", ()=>{
    let input = prompt("Enter Number:");
    let hello = 0;
    while (hello < input){
        hello++;
        console.log("Hello!");
    }
})


// 54. For Loop: 
//     Write a program that calculates the sum of numbers from 1 to 100 
//     using a for loop and prints the result.

let sum54 = 0;
for(let i = 0; i <= 100; i++){
    sum54 = sum54+i;
}
console.log(sum54);

// 55. Switch/Case: 
//     Write a program that takes a month number as input 
//     (1 for January, 2 for February, etc.) and prints the number of 
//      days in that month using a switch/case statement.

let btn55 = document.getElementById("btn55");
btn55.addEventListener("click", () => {

    let monthNumber = prompt("Enter the month number:");
    let month = "";

    switch(monthNumber){
        case 1: month = "January";
        break;        
        case 2: month = "February";
        break;        
        case 3: month = "March";
        break;        
        case 4: month = "April";
        break;        
        case 5: month = "May";
        break;        
        case 6: month = "June";
        break;        
        case 7: month = "July";
        break;        
        case 8: month = "August";
        break;        
        case 9: month = "September";
        break;        
        case 10: month = "October";
        break;        
        case 11: month = "November";
        break;       
        case 12: month = "December";
        break;
    }
    if(monthNumber == 1 || monthNumber == 3 || monthNumber == 5 || monthNumber == 7 ||
        monthNumber == 8 || monthNumber == 10 || monthNumber == 12){
            console.log("In " + monthNumber + " are 31 days.");
        }else if(monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 7 ||
            monthNumber == 11){
                console.log("In" + monthNumber + " are 30 days.")
        }else if (monthNumber == 2){
            console.log("In " + monthNumber + " are 28 days, but every 4th years are 29 days." );

        }else{
            console.log("Wrong Input!");
        }
});

// Note: how can I print month name in log????????


// to be continud......








// 56. While Loop: 
//     Write a program that asks the user to guess a secret number
//     between 1 and 10. Keep asking for guesses until they guess 
//     correctly using a while loop.



// 57. Switch/Case: Write a program that takes a grade (A, B, C, D, or F) 
//     as input and prints a corresponding message using a switch/case 
//     statement. For example, if the input is "A," it should print 
//     "Excellent!"


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