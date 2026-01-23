

// *****************************Conversion to Number*********************************

let score = "33";
let score2 = "33abc";
let score3 = null;
let score4 = undefined;

// console.log(typeof(score));

let valueInNumber = Number(score);  // to number
// console.log(typeof(valueInNumber));

let value2InNumber = Number(score2);
let value3InNumber = String(score3);
let value4InNumber = Number(score4);

// console.log(typeof(value2InNumber));
// console.log(value2InNumber); //NaN
// console.log(value3InNumber);  // 0
// console.log(value4InNumber);  // NaN

// "33" => 
// "33abs" => NaN
// true=> 1; false => 0
// null => 0
// undefined => NaN 


// *****************************Conversion to Boolean*********************************


let isLoggedIn = 1;
let isLoggedIn0 = 0;
let isLoggedIn2 = "";
let isLoggedIn3 = "Hello";

let booleanIsLoggedIn = Boolean(isLoggedIn);
let booleanIsLoggedIn0 = Boolean(isLoggedIn0);
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);


// console.log(booleanIsLoggedIn); // true
// console.log(booleanIsLoggedIn0); // false
// console.log(booleanIsLoggedIn2); // false
// console.log(booleanIsLoggedIn3); // true


// *****************************Conversion to String*********************************

let num=90;

let stringNum= String(num);
// console.log(stringNum); 
// console.log(typeof(stringNum)); // string


// *****************************Operations*********************************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**5); // 2 raised to the power 5.
// console.log(2/2); // division
// console.log(2%2); // remainder/mod

let str1 = "Hello";
let str2 = " World";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2 + 2); // If string is first then all the next values are treated as strings.
// console.log(1 + 2 + "2"); // if string is last then first operation is done and then string is concetenated.

// console.log(+true); //tricky conversion
// console.log(+"");   //tricky conversion

// let x= 1;
// console.log(x);
// x++;
// ++x;
// console.log(x);

let x = 5;
// console.log(x++);
// console.log(x);

// console.log(typeof []); // object

// console.log(Array.isArray([])); // true













