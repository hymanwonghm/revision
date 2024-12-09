const assert = require('assert');

// Expected Behavior: takes a name (a string) and returns a greeting

function createGreeting(inputName) {
    return "Hello, my name is " + inputName
}


/* 
  Add test cases below
*/
assert.strictEqual(createGreeting("Hyman"), "Hello, my name is " + "Hyman")
assert.strictEqual(createGreeting("123456"), "Hello, my name is " + "123456")
assert.strictEqual(createGreeting("$!@$%!^#^"), "Hello, my name is " + "$!@$%!^#^")
assert.strictEqual(createGreeting("\n\\"), "Hello, my name is " + "\n\\")

console.log("All Tests Passed.")
