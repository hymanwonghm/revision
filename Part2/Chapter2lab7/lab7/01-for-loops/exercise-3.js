// Task: Print out the array in reverse order (without using array.reverse())

const arr = [1, 3, 5, 7, 9, 11, 13];

// Add your code here:
for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] < arr[j]){
            let x = arr[i]
            arr[i] = arr[j]
            arr[j] = x
        }
    }
console.log(arr[i])
}





// Expected Output: 
// 13
// 11
// 9
// 7
// 5
// 3
// 1
