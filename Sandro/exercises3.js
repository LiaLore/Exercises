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
let array45 = [[10,35,125,35][40,40,125,50]];
//to be qontinued...












