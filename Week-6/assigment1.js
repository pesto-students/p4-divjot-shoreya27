// SubarrayFind the contiguous subarray within an array, A of length N which has the largest sum.
// Input Format:The first and the only argument contains an integer array, A.
//  Output Format: Return aninteger representing the maximum possible sum of the contiguous subarray.Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000 For example:Input 1: A = [1, 2, 3, 4, -10]Output 1: 10
// Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.

function maxSum(arr){
    let res = []
    for(let i=0; i<arr.length-1;i++){
        sum = arr[i]
        for(let j = i+1; j<arr.length; j++){
            sum += arr[j]
            res.push(sum)
        }
    }
    return Math.max(...res)
}

let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let array2 = [1, 2, 3, 4, -10]
const val = maxSum(array)
const val2 = maxSum(array2)
console.log(val)
console.log(val2)