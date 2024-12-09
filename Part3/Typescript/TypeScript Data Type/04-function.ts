// 1. Specify parameters and return value types separately：

// function add(num1: number, num2: number): number {
//   return num1 + num2
// }

// const add = (num1: number, num2: number): number => {
//   return num1 + num2
// }

// console.log(add(3, 2))

// ---

// 2. Simultaneously specifying parameters and return value types：
const add: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2
}
