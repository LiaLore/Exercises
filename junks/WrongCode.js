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



//49 
let string49 = "I am Lia";
let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;
let countE = 0;
let countF = 0;
let countG = 0;
let countH = 0;
let countI = 0;
let countJ = 0;
let countK = 0;
let countL = 0;
let countM = 0;
let countN = 0;
let countO = 0;
let countP = 0;
let countQ = 0;
let countR = 0;
let countS = 0;
let countT = 0;
let countU = 0;
let countV = 0;
let countW = 0;
let countX = 0;
let countY = 0;
let countZ = 0;
function charCounter(str){
for (let i =  0; i > str.length; i++){
    if(str[i] === "a" || str[i] === "A"){
        countA ++;
    }else if(str[i] === "b" || str[i] === "B"){
        countB++
    }else if(str[i] === "c" || str[i] === "C"){
        countC++
    }else if(str[i] === "d" || str[i] === "D"){
        countD++
    }else if(str[i] === "e" || str[i] === "E"){
        countE++
    }else if(str[i] === "f" || str[i] === "F"){
        countF++
    }else if(str[i] === "g" || str[i] === "G"){
        countG++
    }else if(str[i] === "h" || str[i] === "H"){
        countH++
    }else if(str[i] === "i" || str[i] === "I"){
        countI++
    }else if(str[i] === "j" || str[i] === "J"){
        countJ++
    }else if(str[i] === "k" || str[i] === "K"){
        countK++
    }else if(str[i] === "l" || str[i] === "L"){
        countL++
    }else if(str[i] === "m" || str[i] === "M"){
        countM++
    }else if(str[i] === "n" || str[i] === "N"){
        countN++
    }else if(str[i] === "o" || str[i] === "O"){
        countO++
    }else if(str[i] === "p" || str[i] === "P"){
        countP++
    }else if(str[i] === "q" || str[i] === "Q"){
        countQ++
    }else if(str[i] === "r" || str[i] === "R"){
        countR++
    }else if(str[i] === "s" || str[i] === "S"){
        countS++
    }else if(str[i] === "t" || str[i] === "T"){
        countT++
    }else if(str[i] === "u" || str[i] === "U"){
        countU++
    }else if(str[i] === "v" || str[i] === "V"){
        countV++
    }else if(str[i] === "w" || str[i] === "W"){
        countW++
    }else if(str[i] === "x" || str[i] === "X"){
        countX++
    }else if(str[i] === "y" || str[i] === "Y"){
        countY++
    }else if(str[i] === "z" || str[i] === "Z"){
        countZ++
    }
}
console.log(` A: ${countA}  B: ${countB}  C: ${countC} D: ${countD} 
E: ${countE} F: ${countF}  G: ${countG} H: ${countH} I: ${countI} 
J: ${countJ} K: ${countK} L: ${countL} M: ${countM} N: ${countN} 
O: ${countO} P: ${countP} Q: ${countQ} R: ${countR} S: ${countS} 
T: ${countT} U: ${countU} V: ${countV} W: ${countW} X: ${countX} 
Y: ${countY} Z: ${countZ} `)
}
console.log("49: " + charCounter(string49));

