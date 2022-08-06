// DAY4	
    
// Q.1) What is a Temporal Dead Zone?

// I've heard that accessing let and const values before they are initialized can cause a ReferenceError because of something called the temporal dead zone.

// We all know, accessing a ‘let’ before initializing results in a ‘ReferenceError’ whereas accessing a ‘var’ before its value is initialized we would get ‘undefined’.

// So what happens in case of ‘let’ and ‘const’ before value assignment?

// Variables defined using ‘let’ are in ‘Temporal Dead Zone’ from start of the block until variable’s initialization.


// Q.2) What is the for-in loop in JavaScript? Give its syntax

// Syntax

for (key in object) {
	// code block to be executed
  }


// Q.3) Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript	

// Local Scope, variables declared inside the functions are considered to be of the local scope and it is futher divided into function scoped and block scoped.

// Function Scope: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.

// Block Scope: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop. To be consise the variables declared inside the curly braces are called as within block scope.


// Q.4)  What is difference between null and undefined and where to use what?	

// Definition:

// Null: It is the intentional absence of the value. It is one of the primitive values of JavaScript.

// Undefined: It means the value does not exist in the compiler. It is the global object.

// Type:

// Null: Object 

// Undefined: undefined


// Q.5) what is Symbol?	

// The JavaScript ES6 introduced a new primitive data type called Symbol. Symbols are immutable (cannot be changed) and are unique. For example,

// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false
// Though value1 and value2 both contain the same description, they are different.


// Q.6) Write code to explain map and filter in arrays	

// Map 
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

// Filter
const number = [1, 2, 3, 4];
const evens = number.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]


// Q.7) Explain passed by value and passed by reference	

// Pass By Value: In Pass by value, function is called by directly passing the value of the variable as an argument.
// So any changes made inside the function does not affect the original value.

// Pass by Reference: In Pass by Reference, Function is called by directly passing the reference/address of the variable as an argument. 
// So changing the value inside the function also change the original value. In JavaScript array and Object follows pass by reference property.



// Q.8) Please explain Self Invoking Function (IIFE- Immediately Invoked Function Expressions) and its code	

// Immediately Invoked Function Expressions (IIFE) is a JavaScript function that executes immediately after it has been defined so there is no need to manually invoke IIFE.

(function(){
	console.log("Look, this is example of self-invoking functions");
	})();