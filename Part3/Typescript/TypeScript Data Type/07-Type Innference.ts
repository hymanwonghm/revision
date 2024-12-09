// Declare variables and immediately initialize values, in which case type annotations can be omitted
let age = 18

// age = ''

// Note: If a variable is declared but the value is not initialized immediately, type annotations must also be manually added
let a: number

a = 19
// a = ''

// --

function add(num1: number, num2: number) {
  return num1 + num2
}

add(1, 3)
// add(false, 3)

console.log('object')
