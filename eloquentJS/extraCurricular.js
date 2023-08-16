// 1.
const company = {
    employees: 10,
    founder: "Lika Lore",
    products: ["Phones", "Hardware","Laptops"],
    objects: {
        one: 1,
        two: 2,
        three: [1,3,9]
    },
};
// console.log(company.employees)
// console.log(company.products[1])
// console.log(company.objects.two)
// console.log(company.objects.three[1])

const {employees, founder} = company;
const {0: phones, 2: laptops, 1: hardware} = company.products;
// console.log(employees);
// console.log(founder);
// console.log(hardware);
// console.log(phones);


// 2.

let arr2a = [1,2,4,7,8];
let arr2b = [2,3,4,5];
let intersection = arr2a.filter(element =>
    arr2b.indexOf(element) != -1);
console.log("intersection numbers: " + intersection);

let duplicates = arr2a.filter(item => arr2b.includes(item));
console.log("duplicates: " + duplicates);

let union = arr2a.concat(arr2b);
console.log("union arrays: " + union);

let difference12 = arr2a.filter(element => 
    arr2b.indexOf(element) == -1);
let difference21 = arr2b.filter(element => 
    arr2a.indexOf(element) == -1);
let difference = difference12.concat(difference21);
    console.log("difference numbers: " + difference);

let uniqueUnion = arr2a.concat(difference21);
console.log("unique union: " + uniqueUnion);

