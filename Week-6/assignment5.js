// Pair With Given Difference

function findPair(arr, b){
    for(let i=0;i<arr.length;i++){
        let val = b + arr[i]
        if(arr.includes(val)){
            return 1
        }
    }
    return 0
}

console.log(findPair( [5, 10, 3, 2, 50, 80], 78))
console.log(findPair( [-10, 20], 30))
console.log(findPair( [10,31,11,27], 12))
