// console.log(/abc/.test("abcde"));
// console.log(/abc/.test("abxde"));
// console.log(/abc/.test("abcdxe"));
// console.log(/[0123456789]/.test("in 1992"));
// console.log(/[0-9]/.test("in 1992"));

// let dayTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// console.log(dayTime.test("08-14-2023 08:57"));
// console.log(dayTime.test("Aug-14-2023 08:57"));

// let notBinary = /[^01]/;
// console.log(notBinary.test("1100100010100110"));
// console.log(notBinary.test("1100100010200110"));


// console.log(/'\d+'/.test("'123'"));
// // → true
// console.log(/'\d+'/.test("''"));
// // → false
// console.log(/'\d*'/.test("'123'"));
// // → true
// console.log(/'\d*'/.test("''"));
// // → true
// The star (*) has a similar meaning but also 
// allows the pattern to match zero times. 
// Something with a star after it never prevents 
// a pattern from matching—it’ll just match zero 
// instances if it can’t find any suitable text 
// to match.


// let neighbor = /neighbou?r/;
// console.log(neighbor.test("neighbour"));
// // → true
// console.log(neighbor.test("neighbor"));
// // → true

// let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
// console.log(dateTime.test("1-30-2003 8:45"));

// You can also specify open-ended ranges when using braces by omitting the number after 
// the comma. So, {5,} means five or more times.

