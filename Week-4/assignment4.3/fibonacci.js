let fibb = {
    a : 0,
    b : 1,
    pos: 0,
    [Symbol.iterator](){
        return this
    },
    next(){
        c = this.a + this.b
        this.a = this.b
        this.b = c
        this.pos++
        if(this.pos<=7){
            return {
                value:c,
                done:false
            }
        }else{
            return{
                value:c,
                done:true
            }
        }
    }
}
console.log(fibb.a)
console.log(fibb.b)
for (const el of fibb){
    console.log(el)
}