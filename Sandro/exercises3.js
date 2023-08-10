// 36. Write a program to find the second largest number in an array.
// step1. Array
// step2. empty Array
// step3. parseInt (I think array is not a number)
// step4. sort
// step5. for loop
// step6. if statement (for push larger number end of the array)
// step7. array.length - 1 (??)
// step8. console last index 
// let smth = array.unshift();
// console.log(smth);

let array = [0,1,2,3,4,5];
console.log(typeof(array[i]))
// let array = [1,32,45,7];
let secondLargestNumber = 0;
for(let i = 0; i <= array.length; i++){
    if(array[i] > secondLargestNumber){
        secondLargestNumber = array[1];
    }
}
console.log("36: " + secondLargestNumber);

let numsArray = [0,1,2,3,4,5];
// let numsArray = [1,32,45,7];
let largest1 = 0;
for (let i = 0; i <= numsArray.length; i++){
    if(numsArray[i] > largest1){
        largest1 = numsArray[i];
    }
}
console.log("26: " + typeof(largest1));

// 37. Write a program to check if two arrays are equal. 

let array37 = [10,35,125,35,40,125,50];
let findDublicates = array37 => array37.filter((item, index) => array37.indexOf(item) !== index);
let dubEl = findDublicates(array37);
console.log(dubEl);


// 38. Write a program to find the index of the first occurrence of an element 
//     in an array.


