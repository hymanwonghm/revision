// let arr: (number | string)[] = [1, 3, 5, 'a', 'b']
// let arr1: (number | string)[] = [1, 'x', 2, 'y']

//Renovation:
//Type alias:
type CustomArray = (number | string)[]

let arr: CustomArray = [1, 3, 5, 'a', 'b']
let arr1: CustomArray = [1, 'x', 2, 'y']
