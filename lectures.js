// console.log("a :", a);
// var a = 10;
// console.log("a :", a);

// // // For let type
// console.log("b :", b);
// let b;
// console.log("b :", b);

// // For const type
// console.log("c :", c);
// const c = 10;
// console.log("c :", c);

// Temporal Dead Zone.
// Its the time between the let/const is hoisted & until its initialized
// variable hoisted =======> variable initialized
// If you try to use the let/const in between this above mentioned journey/step, then you will get ref error

// In the above example, we have 
// a is var type, b is let type and c is const type
// If we DEBUG deeply, we find that
// a is put in global scope
// b and c are put in 'script' scope
// We cannot access script memmory space


// Pass by value

// let a  = 20;
// // what happens internnally? 
// // there is some physical memory in our computer which gets allocated to store this number
// // Lets suppose a gets a location 0x6561522AD2

// let b = a;
// console.log("b :", b);

// b =40;
// console.log("a :",a);

// // For arrays, lets first create an array arr
// let arr = [100, 200];
// // lets create another array and assign it with arr
// let brr = arr; // brr = [100, 200]

// // Now we change the array using the second array variable
// brr[0] = 300;

// // That change will now also start reflecting on first array variable
// console.log("arr :", arr);
// console.log("brr :", brr);

// // So this means that, arr and brr are pointing to same memory location

// /*********
// * Application
// */

// function add(x, y) {
//     let sum = x+y;
//     return sum;
// }
// const sum = add(2,3);

// // input: [100, 200]
// // output:[200, 100]
// function swapArray(input) {
//     const temp = input[0];
//     input[0]= input[1]; // [200, 200]
//     input[1] = temp; // [200, 100]
//     // Check
//     // return input;
// }

// const  i = [100, 200]
// console.log("Before swap i : ", i);
// // const swappedArrayi = swapArray(i);
// swapArray(i);
// console.log("After Swap i : ", i);
// // console.log(swappedArrayi);


// // Object change

// let address = {
//     street: "Main street",
//     contact: "7238738217978"
// }

// function changeAddress(address) {
//     address.street="Second street"
// }

// console.log("original address :", address.street);
// changeAddress(address);
// console.log("changed address :", address.street);

// // So, if you pass any array or object to any function, 
// // And if you make any changes to that array or object, 
// // Then the changes will also get reflected on objects outside the function


// let person1 = {
//     fname: "Tom",
//     lname: "Walter"
// }

// let person2 = {
//     fname: "Sam",
//     lname: "Curren"
// }

// person2 = person1;

// console.log("Person1 :", person1);
// console.log("Person2 :", person2);

// person2.fname = "Sam";
// console.log("Person1 :", person1);
// console.log("Person2 :", person2);




// Target for 2-3 weeks: Make sure you code at least 45 mins strictly without GOOGLE

// After Every lecture: go through the notes/code
// Try to break it down into smallest possible code (10-20 lines)
// Make a seaparte file for it

// After 1 week, show me (Mayur) that separate file.
// And your coding time
// You need to upload your daily work on github


// console.log("Hello");

// console.log("Some new changes");

// // Global scope
// var a = 0;
// let b = 20;
// const c = 30;

// {
//     // Block scope
//     console.log(a);    
//     console.log(b);
//     console.log(c);
//     var x = 100;
//     let y = 200;
//     const z = 300;
//     {
//         // Block scope
//         b = 500;
//         console.log(b)
//     }
// }

// console.log(x);    
// //console.log(y);
// //console.log(z);


// function sampleFunc () {
//     console.log("My sample function called");
// }

// sampleFunc();

// function add(a, b) {
//     const sum = a+b;
//     // console.log(sum);
//     return sum;
// }

// const sum = add(4, 6);
// console.log(sum);

// console.log(add(3,6));

// // Arrow Functions
// const sampleArrowFunction = () => {
//     console.log("Sample arrow function called..");
// }

// sampleArrowFunction();

// //
// (function () {
//     console.log("Anonymous function called....");
// })();

// // a();
// // How will you call anonymous function?
// // IIFEs : Immediately invoked functions

// message