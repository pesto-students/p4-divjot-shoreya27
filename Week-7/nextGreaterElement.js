// Problem 7.5: Next Greater ELement
const { Stack} = require("./stack")

function nextGreaterElement(arr){
    let size = arr.length
    let res = Array(size)
    let st = new Stack()
    st.push(0)
    for(let i=1;i<size;i++){
        //check element with stack top
        //if element is less -->push to stack
        //else pop until you find greatest or null
        if(arr[i]>arr[st.top()]){
            while(st.arr.length>0 && arr[st.top()]<arr[i]){
                res[st.top()] = arr[i]
                st.pop()
            }
        }
        st.push(i)
    }
    while(st.arr.length>0){
        res[st.top()] = -1
        st.pop()
    }
    console.log(res)
}

nextGreaterElement([6,8,0,1,3])
//Time complexity: O(N)
//Space Complexity: O(N)