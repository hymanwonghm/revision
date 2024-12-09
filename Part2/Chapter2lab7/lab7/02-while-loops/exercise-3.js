// Task: Print out the array in reverse order (without using array.reverse())

const arr = [1, 3, 5, 7, 9, 11, 13];

// Add your code here:
let i = 0
while (i < arr.length){
    let j = i + 1
    while (j < arr.length){
        if (arr[i] < arr[j]){
            let x = arr[i]
            arr[i] = arr[j]
            arr[j] = x
        }
    j++
    }
console.log(arr[i])
i++
}






// Expected Output: 
// 13
// 11
// 9
// 7
// 5
// 3
// 1
