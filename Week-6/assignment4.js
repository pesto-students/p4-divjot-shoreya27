// Best time to buy and sell stock
// Problem 6.4 : Best time to buy and sell stockYou are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock andchoosing a different day in the future to sell that stock.
// Return the maximum profit youcan achieve from this transaction. 
// If you cannot achieve any profit, return 0.
function bestTimeCalc(arr){
    let min=arr[0];
    let min_index = 0

    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
            min_index = i
        }
    }
    let max = 0
    let profit = false
    for(let i=min_index+1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
            profit = true
        }
    }
    if (profit){
        console.log("profit is:",max-min)
    }else{
        console.log("profit is 0")
    }
}

bestTimeCalc([10,7,6,19,1,19,2,18,2,5,30])

//TimeComplexity: O(N)
//Space Complexity:O(1)