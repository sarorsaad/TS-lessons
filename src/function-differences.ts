// 1. 'this' binding difference
class Counter {
    count: number = 0;

    // Regular function - has its own 'this' context
    regularIncrement(): void {
        this.count += 1;
        console.log("Regular function 'this':", this.count);
    }

    // Arrow function - inherits 'this' from surrounding context
    arrowIncrement = (): void => {
        this.count += 1;
        console.log("Arrow function 'this':", this.count);
    }
}

const counter = new Counter();
console.log("\nTesting Counter methods:");
counter.regularIncrement();  // Works when called as method
counter.arrowIncrement();    // Also works

// 2. Arguments object and rest parameters
function regularSum(...numbers: number[]): number {
    console.log("\nRegular function rest parameters:", numbers);
    return numbers.reduce((a, b) => a + b, 0);
}

const arrowSum = (...numbers: number[]): number => {
    console.log("Arrow function rest parameters:", numbers);
    return numbers.reduce((a, b) => a + b, 0);
}

console.log("\nTesting sum functions:");
console.log("Regular function sum:", regularSum(1, 2, 3, 4));
console.log("Arrow function sum:", arrowSum(1, 2, 3, 4));

// 3. Object methods
const person = {
    name: "John",
    // Regular method - 'this' refers to person
    regularGreet(): void {
        console.log("\nRegular method 'this':", this.name);
    },
    // Arrow method - 'this' refers to surrounding context
    arrowGreet: (): void => {
        // In this context, 'this' won't refer to person
        console.log("Arrow method 'this': undefined");
    }
};

console.log("\nTesting object methods:");
person.regularGreet();
person.arrowGreet();
