const assert = require('assert');

// Expected Behavior: Convert the input to all upper case

function convertToUpperCase(inputName){
    return inputName.toUpperCase()
}


/* 
  Add test cases below
*/

assert.strictEqual(convertToUpperCase("Hyman"), "HYMAN")
assert.strictEqual(convertToUpperCase("Hyman"), "HYMAN")
assert.strictEqual(convertToUpperCase("123456"), "123456")





console.log("All Tests Passed.")