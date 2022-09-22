function hello(){
    return new Promise((res,rej)=>{
        setTimeout(function(){
            res("Hello")
        },2000)
    })
}

function world(){
    return new Promise((res,rej)=>{
        res("World")
    })
}

function js(){
    return new Promise((res,rej)=>{
        setTimeout(function(){
            res("In JavaScript")
        },4000)
    })
}

async function print(){
    const helloFun = await hello()
    const worldFun = await world()
    const inJs = await js()

    console.log(helloFun+" "+worldFun+" "+inJs)
}
print()