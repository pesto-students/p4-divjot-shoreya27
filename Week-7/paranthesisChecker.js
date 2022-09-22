// Problem 7.4: Parenthesis Checker
const {Stack} = require("./stack")
// console.log(Stack)

function paranthesisChecker(str){
    let dic = {
        '(':')',
        '[':']',
        '{':'}'
    }
    let st = new Stack()
    let flag = true
    for(let chr of str){
        if ('[({'.includes(chr)){
            st.push(chr)
        }else{
            let poped = st.pop()
            if(dic[poped]!==chr){
                flag = false
                break
            }
        }
    }
    if(flag && st.arr.length===0){
        console.log("true")
    }else{
        console.log("false")
    }
}

paranthesisChecker("[()]{}{()()}")
paranthesisChecker("[()]{}{()()")

//Time Complexity: O(N)
//space complexity: O(N)