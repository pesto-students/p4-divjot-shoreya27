// Given an array of size N containing only 0s, 1s, and 2s; 
// sort the array in ascendingorder.
// Example 1:Input:N = 5
// arr[]= {0 2 1 2 0}
// Output:0 0 1 2 2
// Explanation: 0's 1's and 2's are segregated into ascending order.

function sortArr(arr){
    let res = {}
    for(let i=0;i<arr.length;i++){
        if(arr[i] in res){
            res[arr[i]] += 1
        }else{
            res[arr[i]] = 1
        }
    }
    count_0 = res['0']
    count_1 = res['1']
    count_2 = res['2']
    let ans = ''
    for(let i=0;i<count_0;i++){
        ans = ans + 0 + " "
    }
    for(let i=0;i<count_1;i++){
        ans = ans + 1 + " "
    }
    for(let i=0;i<count_2;i++){
        ans = ans + 2 + " "
    }
    console.log(ans)
}

sortArr([0,1,1,0,2,0,0,1])