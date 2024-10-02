// Variable declarations
const constantValue = 10; // constant value
let mutableValue = 20; // mutable value
var oldStyleVar = 30; // old style variable declaration

// Console log
console.log("Constant Value:", constantValue);
console.log("Mutable Value:", mutableValue);
console.log("Old Style Var:", oldStyleVar);

// Basic operations
let sum = constantValue + mutableValue;
let difference = mutableValue - constantValue;
let product = constantValue * oldStyleVar;
let quotient = oldStyleVar / constantValue;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// Array operations with map and filter
const numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with each value doubled
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

// Using filter to create a new array with only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// Ternary operator
const isEven = (num) => num % 2 === 0 ? 'Even' : 'Odd';
console.log("Is 4 Even or Odd?", isEven(4));
console.log("Is 5 Even or Odd?", isEven(5));

// Nullish coalescing operator (??)
let undefinedValue;
let nullValue = null;
let defaultValue = 42;

// Arrow functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

console.log("Add 5 + 3:", add(5, 3));
console.log("Subtract 5 - 3:", subtract(5, 3));