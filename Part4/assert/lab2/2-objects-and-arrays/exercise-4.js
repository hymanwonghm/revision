const assert = require('assert');

// Expected Behavior: 
// Given an array of strings, return a new array that only 
// includes those that are 6 characters or fewer in length

const sixCharactersOrFewerOnly = (arr) => {
  return arr.filter(x => x.length < 6)
}


/* 
  Add test cases below
*/
assert.deepEqual(sixCharactersOrFewerOnly(["abcdef", "12345", 6, 666666, [1,2,3,4]]), ["12345", [1,2,3,4]], "Wrong")
assert.deepEqual(sixCharactersOrFewerOnly(["", "12345", 6, 666666, [1,2,3,4]]), ["", "12345", [1,2,3,4]], "Wrong")
assert.deepEqual(sixCharactersOrFewerOnly([[null, null], [null, null, null, null, null, null, null], "12345", 6, 666666, [1,2,3,4]]), [[null, null], "12345", [1,2,3,4]], "Wrong")





console.log("All Tests Passed.")
