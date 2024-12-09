const assert = require('assert');

// Expected Behavior: Get the first N element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array.
// Example: first([1, 2, 3], 2) => [1, 2]

const first = (input_array, number_of_elements) => {
  return input_array.slice(0, number_of_elements)
}

//  Add test cases below

assert.deepEqual(first("abcdefg", 3), "abc", "wrong")
assert.deepEqual(first("abcdefg", 4), "abcd", "wrong")



console.log("All Tests Passed.")