const lang1 = "JavaScript"; // Old string definition syntax.
const lang2 = "Java";
const name = "Ananya";
 
const concat = lang1 + " " + lang2;
// console.log(concat); 

const sentence = `Hello my name is ${name.toUpperCase()} and I am learning ${lang1.toUpperCase()}`;
// console.log(sentence); 

// A template literal is a string created using backticks in JavaScript, which allows string interpolation and multi-line strings.
// Why?
// It is called a template literal because it provides a template-like structure for strings with placeholders, while still being a literal string value.


const anotherName = new String("Shruti-01"); // using the object of String.
// console.log(anotherName[2]);
// console.log(anotherName.__proto__); // to access String methods (prototype).

// console.log(anotherName.length);
// console.log(anotherName.toLowerCase());
// console.log(anotherName.toUpperCase());  //toUpperCase() method returns a new primitive String and does not modify the original String object.
// console.log(anotherName); //  returns String object
// console.log(anotherName.toLocaleLowerCase());
// console.log(anotherName.toLocaleUpperCase());

//  ************************************************************************************************

// console.log(anotherName.charAt(5)); // this method takes index as argument and returns the character at that index.
// console.log(anotherName.charAt(10));  // ""

//  ************************************************************************************************

// console.log(anotherName.indexOf('t'));  // this method returns index of first occurrence of a character or substring.
// console.log(anotherName.indexOf('x')); // -1 
// console.log(anotherName.indexOf('Sh')); // 0

//  ************************************************************************************************

 // substring(startIndex, endIndex) returns a part of the string from startIndex up to (but NOT including) endIndex.

// console.log(anotherName.substring(0,6));
// console.log(anotherName.substring(0,10));  // If endIndex is greater than the string length, JavaScript treats it as the string’s length.

// console.log(anotherName.substring(-9,6));  // treats negative number as 0.

// substring() extracts a portion of a string between two indexes, excluding the end index, and returns a new string. It doesn't support negative index. If we pass negative value as argument then it ignores it and starts from 0th index.

//  ************************************************************************************************

// slice() => slice() extracts a part of a string between two indexes, supports negative indexes, and returns a new string without modifying the original.

const goal = "Healing";
// console.log(goal.slice(0,4));
//  console.log(goal.slice(-4));
// slice(-4) => To get a substring from the 4th character from the end to the last, we pass -4 as the start index and omit(exclude) the end index in slice().
 //Or we can write this also => console.log(goal.slice(-4,goal.length));

//  ************************************************************************************************

 // Trim() => removes extra spaces from the start and end of a string. It does NOT remove spaces in the middle. This method also supports line terminators(\n).

 const book = "  The Palace Of Illusion    ";
//  console.log(book);
//  console.log(book.trim());
//  console.log(book.trimStart());  removes extra spaces from start only.
//  console.log(book.trimEnd());    removes extra spaces from end only.

//  ************************************************************************************************

// replace() => 
// includes() => 
// split() => 



