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


const anotherName = new String("Shruti"); // using the object of String.
// console.log(anotherName[2]);
// console.log(anotherName.__proto__); // to access String methods (prototype).

// console.log(anotherName.length);
// console.log(anotherName.toLowerCase());
// console.log(anotherName.toUpperCase());  //toUpperCase() method returns a new primitive String and does not modify the original String object.
// console.log(anotherName); //  returns String object
// console.log(anotherName.toLocaleLowerCase());
// console.log(anotherName.toLocaleUpperCase());
// console.log(anotherName.charAt(5)); // this method takes index as argument and returns the character at that index.
// console.log(anotherName.charAt(10));  // ""

// console.log(anotherName.indexOf('t'));  // this method returns index of first occurrence of a character or substring.
// console.log(anotherName.indexOf('x')); // -1 
// console.log(anotherName.indexOf('Sh')); // 0





