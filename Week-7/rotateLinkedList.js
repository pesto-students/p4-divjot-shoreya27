// Problem 7.2: Rotate Linked ListGiven a singly linked list of size N. 
// The task is to left-shift the linked list by k nodes
// ,where k is a given positive integer smaller than or equal to length of the linked list.
const {LinkedList}  = require('./linkedlist')

function rotateLL(list, k){
    //get head
    let head = list.head
    let toBeHead = null
    let curr = head
    while(k>1){
        k -= 1
        curr=curr.next
    }
    toBeHead = curr.next
    curr.next = null
    //traverse from toBeHead till null
    let temp = toBeHead
    while(temp.next != null){
        temp=temp.next
    }
    temp.next = head
    list.head = toBeHead
}

let list = new LinkedList();
list.createFromArray([10 ,20,  30,  40,  50,  60])
console.log("List before rotation")
list.traverseList()
console.log("List after rotating 4 times")
rotateLL(list, 4)
list.traverseList()

//time complexity : O(N)
//space complexity: O(1)