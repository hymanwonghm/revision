// Write a function to check if the input word is the same if you read it forward and backward
// Tips: you can consider a string as an array (i.e. you can loop thru a string using loops and index)

const checkWord = (input) => {
    for (i = 0; i < input.length; i++) {
        if (input[i] !== input[input.length-1-i]){
            return false
        }
                                                                                                         
                                                           
    return true
}

// DO NOT EDIT THE CODE BELOW
// Test Cases:

const input1 = "abcdedcba"
console.log(checkWord(input1))

// Expected Output 1: True


const input2 = "apple"
console.log(checkWord(input2))

// Expected Output 2: False