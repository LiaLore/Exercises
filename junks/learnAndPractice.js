// new Set method
let array1 = [1, 22, 12, 34, 432, 1];
let newSetArray1 = new Set(array1);
// console.log(newSetArray1);
newSetArray1.delete(12);
// console.log(newSetArray1)

// last or secound last value

let names = ["Lika", "lia", "likuna", "liakuna"];
let nums = [1, 3, 22, 45]
// console.log(names.at(-2))
// console.log(names[names.length - 3]);
// console.log(nums[nums.length - 2])


// Destructuring!!

let string3 = ["a", "b", "c", "d", "e", "f"];
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 87, 32];
let nums3 = ["smth", "nthng", "nthng"];
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

function sumAMdMultiply(a, b) {
    return [(a + b) * 2, a * b, a / b];
};
// let array = sumAMdMultiply(7,6)
// console.log(array);
let [jkk, fkjh, gik] = sumAMdMultiply(3, 4);
// console.log(jkk);



const person1 = {
    name: "lika",
    age: 36,
    address: {
        city: "Wilton",
        state: "CT",
        zip: "06897"
    }
}


const person2 ={
    name: "Nino",
    age: "40",
    address:{
        city: "Long Island",
        state: "NY"
    }
}

const person4 = {
    address: {
        city: "Wilton",
        state: "CT",
        zip: "06897"
    }
}


const person5 ={
    name: "Nino",
    age: "40"
}
const person3 = {...person4,...person5};
// console.log (person3.name, person3.address.city)
// origin way 
// console.log(person1.name, person1.age,person1.address.city,person1.address.state,person1.address.zip);

// destructuring
// firstName and hobbie has a default value in this case
const {name: firstName = john, age, address, hobbie = "cars"} = person2;

// const {name, age, address} = person1;
// console.log(firstName, address.city, address.state, hobbie); 
// console.log(name, age, address.city, address.state, address.zip); 
const person6 = {
    name: "lika",
    age: 36,
    address: {
        city: "Wilton",
        state: "CT",
        zip: "06897"
    }
}
function printUser(user){
    console.log(user);
}
function printUser1({name,age,address}){
    console.log(`Name is: ${name}. Age is: ${age}, Address is: ${address.city} ${address.state}`);
}
printUser(person6.address.zip);
printUser1(person6);

// to be continued.. 