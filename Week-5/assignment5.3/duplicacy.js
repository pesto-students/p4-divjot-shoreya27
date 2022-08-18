function isDuplicacy(arr){
    const setArr = new Set(arr)
    const size = setArr.size
    if(arr.length === size){
        return false
    }
    return true
}

console.log(isDuplicacy([1,2,3,1,2,3]))//true
console.log(isDuplicacy([1,2,3]))//false
console.log(isDuplicacy([1,1]))//true