// filter() ---> array.filter(function(currentValue,index,arr),thisValue);
const apartNums = [123,5,11,10,89,32,54];
const result = apartNums.filter((apart)=>{
    if(apart !== 5 && apart <= 100){  // if ther is false, filter removes from result.
    return apart;
    }
});
console.log("filter:", result.sort((a,b)=>{return a-b}));

// forEach() ---> array.forEach(function(currentValue,index,arr),thisValue)
const picture = ['picture','picture','picture','picture'];
picture.forEach((item,index,arr)=>{
    arr[index] = item + '-' + (index+1); 
    if(index !== 1){
        return arr[index];
    } 
    // just for check diff between filter & forEach 
})
console.log("forEach:", picture);

// map() ---> array.map(function(element,index,array){},this);
const streetNum = [1,2,3,4,5,6,7,8,9,10];
const streetRes = streetNum.map((element)=>{
    if(element > 9 && element < 100){
    return "165/Wolfstreet/ " + element +", Zip code: 11324";
    }else{
    return "165/Wolfstreet/ " + element +",  Zip code: 11324";
    }
});
console.log(streetNum);
console.log(streetRes);


// reduce() ---> array.reduce((sum,elem) => sum +elem);

let redd = [1,2,3,4,5,6,7,8,9];
let sum = redd.reduce((sum,elem) => sum + elem);
console.log(sum);

// concat() ----> array1.concat(array2,array3);

let concat1 = ['a', 'b','c'];
let concat2 = [1,2,3];
let concat3 = [{name:'Lia', surname: "Lore"}, {counry: "Georgia", language: "Georgian"}];
let newConcat = concat1.concat(concat2,concat3);
console.log(newConcat);

// sort() ----> array.sort(compareFunction);
let strings = ['a', 'b', 'd','f','e'];
let nums = [1,9,99,4,231];
console.log(strings.sort()); 
console.log("correct:", nums.sort((a,b)=>{return a-b}))
console.log("wrong:", nums.sort()); 
// spred ooperator ---> array1.concat(...array2, ...array3);
let numbers = [1,3,5,32];
let sts = ["a","b"]; 
function sp(b,c,d){
    return (b+d)-(c*d);
}
function spr (b,c) {return b + c}; 
console.log(sp(...numbers));
console.log (spr(sts));
//Hoisting

// let ho = 5;
// console.log(ho * hoi); // ReferenceError
// let hoi = 0; 


