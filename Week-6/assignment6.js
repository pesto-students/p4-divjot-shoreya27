// Problem 6.6 : 3 sumGiven an array S of n integers, find three integers in S such that the sum is closest to agiven number, target.
// Return the sum of the three integers.
// Assume that there will only beone solutionExample: given array S = {-1 2 1 -4}, and target = 1. 
// The sum that is closest to thetarget is 2. (-1 + 2 + 1 = 2)

function find3Num(arr, target){
    //sort the array
    arr.sort((a, b) => a - b)
    closeSum = -100000000
    for(let i=0;i<arr.length-2;i++){
        let j = i+1
        let k = arr.length-1
        while(j<k){
            let sum3 = arr[i] + arr[j] + arr[k]
            if(Math.abs(target-sum3) < Math.abs(target-closeSum)){
                closeSum = sum3
            }
            if(sum3 <= target){
                j += 1
            }else if(sum3 > target){
                k -= 1
            }
        }
    }
    console.log(closeSum)
}

find3Num([1, 2, 3, 4, -5], 1)
//Time complexity : O(N^2)
//space complexity: O(1)