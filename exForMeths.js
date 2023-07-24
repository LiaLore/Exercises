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

// sort() ----> array.sort(compareFunction);
// spred ooperator ---> array1.concat(...array2, ...array3);



//Hoisting

let ho = 5;
console.log(ho * hoi); // ReferenceError
let hoi = 0; 


