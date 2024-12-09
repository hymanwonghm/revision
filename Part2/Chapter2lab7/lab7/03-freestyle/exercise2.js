// Task: Write a JavaScript program to count of the specified element in an array. 

const count = (input_array, character) => {
    let countNum = 0
    for (const i of arr1){
        if (i === character) {
            countNum += 1
        }
    }
    return countNum
}

// DO NOT EDIT THE CODE BELOW
// Test Cases
const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(count(arr1, 'a'))
console.log(count(arr1, 2))

// Expected Output: 
// 5
// 2