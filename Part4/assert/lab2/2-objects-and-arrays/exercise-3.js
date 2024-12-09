const assert = require('assert');
// Expected Behavior: 
// Given an array of numbers, return a new array that has only the numbers that are 10 or greater.

const tenAndGreaterOnly = (arr) => {
  return arr.filter(x => x >= 10)
}


/* 
  Add test cases below
*/
assert.deepEqual(tenAndGreaterOnly([10,4,-Infinity, Infinity, NaN]), [10, Infinity], "wrong")
assert.deepEqual(tenAndGreaterOnly([10,4,-Infinity, Infinity, "abcdefg", {"key": 1234}]), [10, Infinity], "wrong")


console.log("All Tests Passed.")