// 1. Simple number array
// This declares an array that can only contain numbers
let nums: number[] = [1, 2, 3, 4];
console.log("Number array:", nums);

// 2. Tuple - a fixed-length array where each position has a specific type
// This tuple must have exactly 3 elements: string, string, number (in that order)
let cars: [string, string, number] = ["Toyota", "BMW", 2];
console.log("Tuple:", cars);

// 3. Union type array
// This array can contain elements that are either strings, numbers, or Date objects
let user: (string | number | Date)[] = ["", 2];

// Adding different types of allowed values
user.push("mohamed");    // Adding a string - ✅ allowed
user.push(5);           // Adding a number - ✅ allowed
user.push(new Date());  // Adding a Date object - ✅ allowed
// user.push(true);     // ❌ This would cause an error because boolean is not in the union type

// Accessing array elements
console.log("User array:", user);
console.log("Third element:", user[2]);

// Array mapping example
// The map method iterates over each element in the array
// For each element, we specify its type as (string | number | Date)
user.map((data: string | number | Date): void => {
    // For each element, log its value and type
    console.log(`Value: ${data}, Type: ${typeof data}`);
});

// Alternative way using a more explicit function
user.map(function processItem(data: string | number | Date): void {
    if (data instanceof Date) {
        console.log(`Date value: ${data.toISOString()}`);
    } else {
        console.log(`Regular value: ${data}`);
    }
});
