class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    addElement(value){
        let node = new Node(value)
        if(this.head===null){
            this.head = node
            return
        }
        let curr = this.head
        while(curr.next!==null){
            curr = curr.next
        }
        curr.next = node
    }

    createFromArray(arr){
        for(let ele of arr){
            this.addElement(ele)
        }
    }
    traverseList(){
        let curr = this.head
        let str = ''
        while(curr!==null){
            str += curr.value + " "
            curr=curr.next
        }
        console.log(str)
    }

    createLoop(pos){
        let curr = this.head
        let posEle = this.head
        while(curr.next!==null){
            curr = curr.next
        }
        while(pos>1){
            posEle=posEle.next
            pos-=1;
        }
        curr.next = posEle
    }
}

// let list = new LinkedList();
// let list2 = new LinkedList();
// list.addElement(5)
// list.addElement(10)
// list.addElement(15)
// list.addElement(20)
// list.addElement(25)
// list.addElement(30)
// list.traverseList()

// list.createFromArray([1,2,3,4,5,6])
// list2.createFromArray([10,11,12,13,14])
// list.traverseList()
// console.log("List2:")
// list2.traverseList()
// console.log("create loop with ele at pos 3")
// list2.createLoop(3)
// list2.traverseList()
module.exports.LinkedList = LinkedList