const assert = require('assert');

// Expected Behavior: the halve function would return half of the input number (i.e. divide by 2)

function halve(number) {
  return number/2
}


/* 
  Add test cases below
*/
assert.strictEqual(halve(0), 0, "0/2 should return 0")
assert.strictEqual(halve(1), 0.5, "1/2 should return 0.5")
assert.strictEqual(halve(-1), -0.5, "-1/2 should return -0.5")
assert.strictEqual(halve(Infinity), Infinity, "Infinity/Infinity should return Infinity")
assert.strictEqual(halve(-Infinity), -Infinity, "Infinity/Infinity should return Infinity")


console.log("All Tests Passed.")