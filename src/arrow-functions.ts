// 1. Functions with No Parameters
// Regular function
let regularTestOne = function(): number {
    return 2;
};

// Arrow function - with curly braces
let arrowTestOne = (): number => {
    return 2;
};

// Arrow function - concise syntax
let arrowTestTwo = () => 2;  // Type inference will determine return type

// 2. Functions with One Parameter
// Regular function
let regularTestTwo = function(param: number): number {
    return param * 2;
};

// Arrow function - with parentheses
let arrowTestThree = (param: number): number => {
    return param * 2;
};

// Arrow function - without parentheses (single parameter)
let arrowTestFour = (param: number): number => param * 2;  // Added type annotation

// Arrow function - concise with type
let arrowTestFive = (param: number): number => param * 2;

// 3. Functions with Multiple Parameters
// Regular function
let regularTestThree = function(param1: number, param2: number): number {
    return param1 + param2;
};

// Arrow function
let arrowTestSix = (param1: number, param2: number): number => param1 + param2;

// 4. Real-world examples
// Array map with arrow function
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num: number): number => num * 2);

// Object with method
const calculator = {
    numbers: [1, 2, 3, 4, 5],
    sum: function(): number {
        // Arrow function preserves 'this' context
        return this.numbers.reduce((acc: number, curr: number): number => acc + curr, 0);
    }
};

// Testing all functions
console.log("No Parameters:");
console.log("regularTestOne:", regularTestOne());
console.log("arrowTestOne:", arrowTestOne());
console.log("arrowTestTwo:", arrowTestTwo());

console.log("\nOne Parameter:");
console.log("regularTestTwo:", regularTestTwo(5));
console.log("arrowTestThree:", arrowTestThree(5));
console.log("arrowTestFour:", arrowTestFour(5));
console.log("arrowTestFive:", arrowTestFive(5));

console.log("\nMultiple Parameters:");
console.log("regularTestThree:", regularTestThree(5, 3));
console.log("arrowTestSix:", arrowTestSix(5, 3));

console.log("\nReal-world examples:");
console.log("Doubled array:", doubled);
console.log("Sum of numbers:", calculator.sum());
