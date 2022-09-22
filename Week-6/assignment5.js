// Pair With Given Difference
// Problem 6.5: Pair With Given DifferenceGiven an one-dimensional unsorted array A 
// containing N integers.You are also given aninteger B, 
// find if there exists a pair of elements in the array whose difference is B.Return1 if any such pair exists else return 0.
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

//Time complexity: O(N)
//space complexity: O(1)