class Stack{
    constructor(){
        this.arr = []
    }

    push(value){
        this.arr.push(value)
    }

    pop(){
        if(this.arr.length>0){
        return this.arr.pop()
    }else{
            console.log("Empty Stack")
        }
    }

    display(){
        console.log(this.arr)
    }
}

// let st = new Stack()
// st.push(1)
// st.push(2)
// st.push(3)
// st.display()
// st.pop()
// st.pop()
// st.pop()

module.exports.Stack = Stack