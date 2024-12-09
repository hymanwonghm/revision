// Task: Calculate the factorial of the input
// Tips: factorial of 5 = 5*4*3*2*1

const input = 10

// Add your code here
let factorial = input
for(let i = input -1; i > 0; i--){
    factorial *= i
}
console.log(factorial)






// Expected Output: 
// 3628800