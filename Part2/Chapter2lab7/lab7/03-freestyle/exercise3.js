// Write a JavaScript function to find an array contains a specific element.

const contains = (array, target) => {
for (i of array) {
    if (i === target){
        return true
    }
}
return false
}

// DO NOT EDIT THE CODE BELOW
// Test Case
const arr = [2, 5, 9, 6];
console.log(contains(arr, 9));
console.log(contains(arr, 12));

// Expected Output: 
// true
// false