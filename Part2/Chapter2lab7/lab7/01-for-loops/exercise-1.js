// Task: Complete the follwing steps as instructed.

const arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
const arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351


// Step 1: Calculate the sum of arr_1 and store in a variable "sum1"
// Add your code below:
let sum1 = 0
for (let i of arr_1){
    sum1 += i
}




// Step 2: Calculate the sum of arr_2 and store in a variable "sum2"
// Add your code below:
let sum2 = 0
for (let i of arr_2){
    sum2 += i
}





// Step 3: Print out the sum of the 2 arrays
// Add your code below:
console.log(sum1 + sum2)





// Step 4: Calculate the difference of sum of the two array
// Tricky Part: the difference should be a positive number
// sum of arr_1 could be larger or smaller than sum of arr_2
// Tips: use an if statement to handle the tricky part
sum1 > sum2 ? console.log(sum1 - sum2) : console.log(sum2 - sum1)




// Expected Output: 
// 627
// 75