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
// 26 
let numsArray = [0,1,2,3,4,5];
// let numsArray = [1,32,45,7];
let largest1 = 0;
for (let i = 0; i <= numsArray.length; i++){
    if(numsArray[i] > largest1){
        largest1 = numsArray[i];
    }
}
console.log("26: " + largest1);

let numsArray11 = [0,10,35,125,30,40,50];
let nums = numsArray11.map(function(str){
    return parseInt(str);
})
nums.sort();
console.log(nums.sort());
// let nums = [1,32,45,7];
let largest10 = 0;
let largest11 = [];
for (let i = 0; i <= nums.length; i++){
    if(nums[i] >= largest10){
        largest10 = nums[i];
        largest11.push(largest10);
    }
    // else{
    //     largest11.unshift(largest10);
    // }
}
console.log(nums)
console.log(largest11);
