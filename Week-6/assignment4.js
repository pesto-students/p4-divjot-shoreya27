// Best time to buy and sell stock
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