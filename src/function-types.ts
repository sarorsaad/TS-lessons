// 1. Function Declaration
console.log("\n--- Function Declaration Example ---");
console.log("Calling function before declaration:", addNumbers(5, 3));  // Works due to hoisting

// Function Declaration is hoisted
function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log("Calling function after declaration:", addNumbers(2, 4));

// 2. Function Expression
console.log("\n--- Function Expression Example ---");
// console.log(multiplyNumbers(3, 4));  // Error: Cannot access before initialization

// Function Expression is not hoisted
const multiplyNumbers = function(a: number, b: number): number {
    return a * b;
};

console.log("Calling function expression:", multiplyNumbers(3, 4));

// 3. Demonstrating Scoping Differences
console.log("\n--- Scoping Example ---");

function demonstrateScoping(): void {
    // Function Declaration inside a function
    function innerDeclared(): string {
        return "I'm a declared function";
    }

    // Function Expression inside a function
    const innerExpressed = function(): string {
        return "I'm an expressed function";
    };

    console.log(innerDeclared());
    console.log(innerExpressed());
}

demonstrateScoping();

// 4. Function Declaration vs Expression in Conditional Blocks
console.log("\n--- Conditional Blocks Example ---");

let condition = true;

if (condition) {
    // Function Declaration in block (not recommended)
    function blockDeclared(): string {
        return "Block declared";
    }

    // Function Expression in block (preferred)
    const blockExpressed = function(): string {
        return "Block expressed";
    };

    console.log(blockExpressed());
}

// 5. Named Function Expression
console.log("\n--- Named Function Expression Example ---");

const factorial = function calculateFactorial(n: number): number {
    if (n <= 1) return 1;
    return n * calculateFactorial(n - 1);  // Can use name recursively
};

console.log("Factorial of 5:", factorial(5));

// 6. Practical Example: Event Handler
console.log("\n--- Event Handler Example ---");

// Function Declaration
function handleClick(event: string): void {
    console.log("Handling click:", event);
}

// Function Expression
const handleMouseover = function(event: string): void {
    console.log("Handling mouseover:", event);
};

// Simulating events
handleClick("button-click");
handleMouseover("button-hover");

// 7. IIFE (Immediately Invoked Function Expression)
console.log("\n--- IIFE Example ---");

(function(): void {
    const secret = "I'm only available inside this IIFE";
    console.log(secret);
})();

// console.log(secret);  // Error: secret is not defined

// 8. TypeScript Function Type Annotations
console.log("\n--- TypeScript Type Annotations Example ---");

// Function type definition
type MathFunction = (x: number, y: number) => number;

// Function Declaration with type annotation
const add: MathFunction = function(x: number, y: number): number {
    return x + y;
};

console.log("Add with type annotation:", add(5, 3));
