// new Set method
let array1 = [1,22,12,34,432,1];
let newSetArray1 = new Set(array1);
console.log(newSetArray1);
newSetArray1.delete(12);
// console.log(newSetArray1)

// last or secound last value

let names = ["Lika", "lia", "likuna", "liakuna"];
let nums = [1,3,22,45]
// console.log(names.at(-2))
// console.log(names[names.length - 3]);
// console.log(nums[nums.length - 2])


// Destructuring!!

let string3 = ["a", "b","c","d","e","f"];
let numbers3 =[1,2,3,4,5,6,7,8,87,32];
let nums3 = ["smth","nthng","nthng"];
// const a = string3[0]
// const b = string3[1]
// const n0 = numbers3[0]
// const [a,b] = string3;
// const [a,b,e,c,d] = numbers3;
// const [c, ...rest] = numbers3;
const newArray3 = [...string3, ...numbers3, ...nums3]
// console.log(newArray3)
// console.log(a);
// console.log(b);
// console.log(e);
// console.log(rest);

function sumAMdMultiply(a,b){
    return [(a + b)*2, a * b, a / b];
};
// let array = sumAMdMultiply(7,6)
// console.log(array);
let [d,f,g] = sumAMdMultiply(3,4);
console.log(d,f,g);

