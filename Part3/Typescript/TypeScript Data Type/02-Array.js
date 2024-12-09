// Array Type：
/*
let numbers: number[] = [1, 3, 5]

// let numbers1: Array<number> = [1, 3, 5]

let b: boolean[] = [true, false]
*/
//Joint type:
//Add parentheses to indicate: first, an array, and then, elements of type number or string can appear in this array
var arr = [1, 3, 5, 'a', 'b'];
// Without adding parentheses, it means that arr1 can be both a number type and a string []
// let arr1: number | string[] = ['a', 'b']
// let arr1: number | string[] = 123
var arr1 = ['a', 'b'];
console.log(arr1);
