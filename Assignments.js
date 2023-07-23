// ==========================================================================
// Homework: Remove duplicates from the below array  
// 07/21/2023
// ==========================================================================
const nums = [1, 4, 2, 4, 8];
const fruits = ["Oranges", "Kiwi", "Banana", "Kiwi"];
const listOfBankDetails = [
    {bank: "Bank of America", accountNum: 324124, accountName: "Mayur"}, 
    {bank: "TD Bank", accountNum: 534553, accountName: "Lia"}, 
    {bank: "Bank of Colorado", accountNum: 747456, accountName: "Mariam"},
    {bank: "Bank of America", accountNum: 534555, accountName: "Beka"}
];
function sorterN(num){
    num = num.sort(function(a, b){return a-b});
    return num;
}
console.log(sorterN(nums));
function sorterF(fruit){
    fruit = fruit.sort(function(a, b){return a-b});
    return fruit;
}
console.log(sorterF(fruits));

function compareFuncByBank(a, b) {

    if (a.bank > b.bank) {
        return -1;
    } else if (a.bank < b.bank) {
        return 1;
    } else return 0;
}
listOfBankDetails.sort(compareFuncByBank);
console.log("Bank Details: ", listOfBankDetails); 

// function compareFuncByAcNum(a,b){
//     if (a.accountNum > b.accountNum){
//         return 1;
//     }else if(a.accountNum < b.accountNum){
//         return -1;
//     }else{
//         return 0;
//     }
// }
// listOfBankDetails.sort(compareFuncByAcNum);
// console.log("Bank Acount Numbers: ", listOfBankDetails );

// function compareFuncByAccName(a,b){
//     if(a.accountName > b.accountName){
//         return 1;
//     }else if(a.accountName < b.accountName){
//         return -1;
//     }else{
//         return 0;
//     }
// }
// listOfBankDetails.sort(compareFuncByAccName);
// console.log("Bank Account Names:",listOfBankDetails);

// NOTE: Sort changes main Array and if I don't use diff Arrays,
// then works only last sort logic. 