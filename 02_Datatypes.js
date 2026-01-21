"use strict"; // treat all JS code as newer version.

// alert("Hello"); we are using node js, not browser.

let name = "name";
let name2="Ananya";
let age = 23;
let is_logged_in = false;

// ******************Primitive datatypes*************************

// number => 2 to the power 53.
// BigInt
// string => ""
// bollean => true/false
// null => standalone value and (empty value)
// undefined => when value is not defined/assigned.
// symbol => unique


// ******************Non-Primitive datatypes*************************

// Object

console.log(typeof undefined); //undefined
console.log(typeof null); // object










































// ******************************Self*************************

let user={
    [name]:name2
}
let user1={...user,};
// console.log(user1);


let arr1=[1,2,3,4];
let arr2=[...arr1,5,6];

// console.log(arr2);


// console.log(user[name]);

