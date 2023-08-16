// 37. Write a program to check if two arrays are equal. 

let array37 = [10,35,125,35,40,125,50];
// 1.
let findDublicates = array37 => array37.filter((item, index) => array37.indexOf(item) !== index);
let dubEl = findDublicates(array37);
console.log(dubEl);

// 2.
let toMap = {};
let result = false;
for(let i = 0; i < array37.length; i++){
    if(toMap[array37[i]]) {
        result = true;
        break;
    }
    toMap[array37[i]] = true;
}
if(result){
    console.log("Dublicate element exist!");
}else{
    console.log("Dublicate elements don't exist!");
}

// 3.
toFindDuplicates();

function toFindDuplicates() {
    let arry = [1, 2, 1, 3, 4, 3, 5];
    let toMap = {};
    let resultToReturn = false;
    for (let i = 0; i < arry.length; i++) {

        if (toMap[arry[i]]) {
            resultToReturn = true;
            // terminate the loop
            break;
        }

        toMap[arry[i]] = true;
    }

    if (resultToReturn) {
        console.log("Duplicate elements exist");
        }
        else {
            console.log("Duplicates don't exist");
            }
        }

// 4. 

toFindDuplicates();

function toFindDuplicates() {
    let arry = [1, 2, 1, 3, 4, 3, 5];
    let resultToReturn = false;
    // call some function with callback function as argument
    resultToReturn = arry.some((element, index) => {
        return arry.indexOf(element) !== index
    });
    if (resultToReturn) {
        console.log("Duplicate elements exist");
    }
    else {
        console.log("Duplicates don't exist");
        }
    }

    // 5. 
    toFindDuplicates();

function toFindDuplicates(element, index) {
    let arry = [1, 2, 1, 3, 4, 3, 5];
    let resultToReturn = false;
    for (let i = 0; i < arry.length; i++) { // nested for loop
        for (let j = 0; j < arry.length; j++) {
            // prevents the element from comparing with itself
            if (i !== j) {
                // check if elements' values are equal
                if (arry[i] === arry[j]) {
                    // duplicate element present                                
                    resultToReturn = true;
                    // terminate inner loop
                    break;
                }
            }
        }
        // terminate outer loop                                                                      
        if (resultToReturn) {
            break;
        }
    }
    if(resultToReturn) {
        console.log("Duplicate elements exist");
    }
    else {
        console.log("Duplicates don't exist");
        }
    }