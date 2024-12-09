const assert = require('assert');

// Expected Behavior: Count Letters for each of the name in the array of object

const countLetters = (arr) => {
  return arr.map(x => x.name.length)
}

/* 
  Add test cases below
*/

assert.deepEqual(countLetters([{"name": "Peter"}, {"name": "Peter1234"}, {"name": "Peter78900"}, {"name": "Peter77"}]), [5, 9, 10, 7])



console.log("All Tests Passed.")
