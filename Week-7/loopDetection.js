// Problem 7.3: Detect loop in a linked list
const {LinkedList} = require("./linkedlist")

function detectLoop(list){
    let ptr1 = list.head
    let ptr2 = list.head
    let flag = false

    while(ptr2.next!==null){
        ptr1 = ptr1.next
        ptr2 = ptr2.next.next
        if(ptr1 === ptr2){
            flag = true
            break
        }        
    }
    if(flag){
        console.log("Loop Detected: True")
    }else{
        console.log("Loop Detected: False")
    }
}

let list = new LinkedList()
list.createFromArray([1,3,4])
list.traverseList()
list.createLoop(2)
detectLoop(list)

//Time complexity: O(n)
//space complexity: O(1)