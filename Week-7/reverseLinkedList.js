// Problem 7.1 : Reverse the Linked list
const {LinkedList}  = require('./linkedlist')

function reverseLinkedList(list){
     let prev = null
     let next = null
     let curr = list.head
     while(curr!=null){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
     }
     list.head = prev
}

let list = new LinkedList()
list.createFromArray([1,2,3,4,5,6])
list.traverseList()//before reversal
console.log("Reversing the list")
reverseLinkedList(list)
list.traverseList()


console.log("Example 2")
let list2 = new LinkedList()
list2.createFromArray([2,7,8,9,10])
list2.traverseList()//before reversal
console.log("Reversing the list")
reverseLinkedList(list2)
list2.traverseList()

//Time Complexity: O(n)
//space complexity: O(1)