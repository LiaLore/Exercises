// const text = document.getElementById("smt");

//////////////

// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.

//-------------------   #283 Move Zeroes


var moveZeroes = function(nums) {
    
 for (let i = nums.length-1; i >= 0; i--){
    nums[i] === 0 && nums.splice(i,1) && nums.push(0);
 }
 return nums;
};

const arr = [0,1,0,3,12]; 
const rv = moveZeroes(arr);
console.log(rv);

// 88.


// var merge = function(nums1, m, nums2, n) {
//     let newArr = nums1(2).concat(nums2(3));
//     newArr.sort();
//     return newArr;
// };

// var nums1 = [4,8,9,99,0,8];
// var m = 3;
// var nums2 = [4,8,9];
// var n =3;


// console.log(merge(nums1,m,nums2,n))



// let words = ["cd","ac","dc","ca","zz"]
// var maximumNumberOfStringPairs = (words) =>{
//    for(let i = 0; i < words.length; i++){
//        if(words[i] == i.reverse()){
//            console.log(words[i]);
//        }
//    }
// };
// console.log(maximumNumberOfStringPairs(words));




                           // მოვძებნო თხა
                           // დავარევერსო
                           // შევადარო ერთმანეთს
                           // დავაბრუნო შედეგი
                           // დავთვალო ინდეხების რაოდენობა
                           // ?????????????????????

// const nums1 = [1,2,3,0,0,0];
// const nums2 = [2,5,6];
// let m = 3;
// let n = 3;

// var merge = function(nums1, m, nums2, n) {
//    nums1.splice(m,nums1.length-m);
//    nums2.splice(n, nums2.length - n);
//    result = nums1.concat(nums2).sort;
//    // return result;
//    console.log(result);
// };
// const mrg = merge;
// console.log(mrg)
// console.log(nums1)


// let nums =
// [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]
// var missingNumber = function(nums){
//    let i = 0, j;
//    while (i < nums.length){
//       j = i+1;
//       while (j < nums.length){
//          if(nums[j] < nums[i]){
//             let temp = nums[i];
//             nums[i] = nums[j]
//             nums[j] = temp;
//          }
//          j++
//       }
//       i++
//    }
//    return nums;
// }
// console.log(missingNumber())



// let nums = 
// [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14];

// // function missingNumber(nums) {
//    nums.sort(function(a,b){return b-a});
//    console.log(typeof(nums));
//    let missingValue = "";
//    for (let i = 0; i < nums.length; i++){
//        if(nums[i] !== i){
//            missingValue = i;
//            break;
//        }else{
//            missingValue = i+1;
//        }
//    }
//    return missingValue;
//     return missingValue.sort();
//    console.log(missingValue);
// // };
// // const res = missingNumber();
// // console.log(missingNumber);
// // missingNumber();


let numbers = 
[45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14];

//არაის ცვლადს და ფუნქციის პარამეტრს არ უნდა იყოს ერთი, მხოლოდ გამოძახების 
//დროს ვაძლევთ არაის ცვლადს ფუნქციის არგუმენტად!!

var missingNumber = function(nums) {
   nums = nums.sort(function(a, b){return a - b});
   // console.log(nums);
   let missingValue = "";
   for (let i = 0; i < nums.length; i++){
       if(nums[i] !== i){
           missingValue = i;
           break;
       }else{
           missingValue = i+1;
       }
   }
    return nums;
};
const smt = missingNumber(numbers);
console.log(smt);
