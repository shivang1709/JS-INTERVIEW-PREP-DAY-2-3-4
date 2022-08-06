//CallBack Hell ?

// It instead of immediately returning result like other functions, taken time to produce the result.
// So, if we stuck in some particular call which prevents us from making  further calls ends us into Callback Hell.
// The structure of Callback Hell looks like pyramid/arrow shape.
// This makes our code look haphazard(badly Organized)  and make it hard to understand.
// We should always try to avoid  using multiple Callbacks to end up falling into callback hell.

// Create a callback hell where it will print the number from 1 to 5

function printNumber() {
    setTimeout(() => {
        console.log('1');
        setTimeout(() => {
            console.log('2');
            setTimeout(() => {
                console.log('3');
                setTimeout(() => {
                    console.log('4');
                    setTimeout(() => {
                        console.log('5');
                    }, 5000)
                }, 4000)
            }, 3000)
        }, 2000)
    }, 1000)
}
// printNumber();

// What are promises and why do we need them?

//Promises - Promises are used to handle asynchronous operations in JavaScript.
// They are easy to manage when dealing with multiple asynchronous operations when callbacks can create callback hell leading to unmanageable code. 
// It also allow us to make API calls or fetch data from Web Servers successfully. 
// If not able to do so fetch us with error message.
// It have three stages.

// 1.Pending        2.Resolved(fulfilled)       3.Rejected

//To prevent callback hell we use promises. Our code will look cleaner. This will also handle 'errors'.


// What is promise chaining? 

// Print vowels aeiou after 54321 seconds ?

const printAlphabets = (time, value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(time + ' = ' + value);
            resolve();
        }, time);
    })
}
// printAlphabets(5000, 'a')
//     .then(()=> printAlphabets(4000, 'e'))
//     .then(()=> printAlphabets(3000, 'i'))
//     .then(()=> printAlphabets(2000, 'o'))
//     .then(()=> printAlphabets(1000, 'u'))

    //Multiple then blocks leads to promise chaining.

// What is the purpose of async/await keywords?

// It was introduced in ES8.
//  They used to handle promises  more efficiently.
//  The word async before a function always means that the function always "returns a promise". So, we therefore use async before the function name to return a promise instead of a value.
//  Await is used to wait for the result that  is to be returned from the promise. So, we use await when we are calling a function which returns a promise.
//  Also, we can use them(Async/Await) for making API calls.
//  Await is always used with Async only.

// async  // Example for Async functions promise setTimeOut(), callback

// Give an example of async/await?

async function newFunction(){
    await printAlphabets(5000, 'a')
    await printAlphabets(4000, 'e')
    await printAlphabets(4000, 'i')
    await printAlphabets(2000, 'o')
    await printAlphabets(1000, 'u')
}

// newFunction();
// What is hoisting?
// Hoisting is a JavaScript Mechanism where variables and function declarations are moved to the top of the scope before the code execution.

//What is DOM ?

// Document Object: 
//     The document object represent a web page that is loaded in the browser. 
//     By accessing the document object, we can access the element in the HTML page. 
//     With the help of document objects, we can add dynamic content to our web page. 
//     The document object can be accessed with a window.document or just document.

// Syntax:
//     document.property_name;

//Basically we can access the HTML in 4 ways using this,
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()

// Pure Functions ?

// Pure function = consistent result
//Pure functions - This is a function which gives you same output for same input passed. It doesn't give you 
// different output for the same input every time we call the function. It doesn't depends on some variables 
// whose value might change in the future, and therefore always gives you same values. Examples a function which
//  only uses constants in their body.

function add(a, b){
    console.log(a+b);
}
add(10, 20);
add(10, 20);

//Impure Functions ?
// An impure function is a function that contains one or more side effects. It mutates data outside of its lexical scope and does not predictably produce the same output for the same input.
//Example 

var addNew = 0;

function add(a,b){ 
  addNew++; 
  return a + b + addNew
}

console.log(add(4,5))
console.log(add(4,5))
console.log(add(4,5))


// Arrow function ?

// Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions.

const print = () => console.log('Hello');
print();