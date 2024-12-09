const assert = require('assert');

// Expected Behavior: multiplies two numbers together

function multiply(x, y) {
  return x * y
}

/* 
  Add test cases below
*/
assert.strictEqual(multiply(1, 1), 1, "1*1 should return 1")
assert.strictEqual(multiply(2, -1), -2, "1*1 should return 1")
assert.strictEqual(multiply(0, -1), 0, "1*1 should return 1")
assert.strictEqual(multiply(Infinity, 1), Infinity, "1*Infinity should return Infinity")


console.log("All Tests Passed.")

