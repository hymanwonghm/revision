const assert = require('assert');

// Expected Behavior: Merge two arrays

const merge_array = (arr1, arr2) => {
  return arr1.concat(arr2)
}


/* 
  Add test cases below
*/
assert.deepEqual(merge_array(['a', 'b', 'c'], ['d', 'e', 'f']), ['a', 'b', 'c', 'd', 'e', 'f'])
assert.deepEqual(merge_array([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4, 5, 6])
assert.deepEqual(merge_array("abc", "def"), "abcdef")
assert.deepEqual(merge_array([], []), [], "E")



console.log("All Tests Passed.")