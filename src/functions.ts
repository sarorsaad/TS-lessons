// 1. Regular function declaration
// This is the traditional way to declare a function
function sum(a: number, b: number): number {
    return a + b;
}

// 2. Arrow function expression
// Modern ES6+ syntax, often used in callbacks and methods
const sum2 = (a: number, b: number): number => {
    return a + b;
};

// 3. Function expression
// Traditional function expression with void return type
const sum3 = function(a: number, b: number): void {
    console.log(a + b);
};

// Testing our functions
console.log("Function 1 result:", sum(5, 3));      // Returns 8
console.log("Function 2 result:", sum2(10, 5));    // Returns 15
sum3(5, 9);                                        // Prints 14

// Additional examples showing function variations:

// 4. Arrow function with implicit return
const multiply = (a: number, b: number): number => a * b;

// 5. Function with optional parameter
function greet(name: string, greeting?: string): string {
    return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}

// Testing additional functions
console.log("Multiplication:", multiply(4, 3));     // Returns 12
console.log(greet("TypeScript"));                  // Prints "Hello, TypeScript!"
console.log(greet("TypeScript", "Welcome"));       // Prints "Welcome, TypeScript!"
