
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
console.log(company.employees)
console.log(company.products[1])
console.log(company.objects.two)
console.log(company.objects.three[1])

const {employees, founder} = company;
const {0: phones, 2: laptops, 1: hardware} = company.products;
console.log(employees);
console.log(founder);
console.log(hardware);
console.log(phones);
