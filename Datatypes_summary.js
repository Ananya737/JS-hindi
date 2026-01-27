//Yet to complete.

//Stack memory (Primitive) - whatever variable we have declared, we get a copy of that.
let a = "Hello";
let b = a;
a="world";
console.log(a);
console.log(b);

//Heap memory (Non-Primitive) - whatever variable we have declared, we get a reference of that.

let user1 ={name:"Ananya"};
let user2 =user1;  // here reference is being copied not the actual value.

console.log(user2.name="Shruti");







