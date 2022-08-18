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

function* print(){
    yield hello()
    yield world()
    yield js()
}

async function result(){
    const gen = print()
    const helloFun =  await gen.next().value
    const worldFun = await gen.next().value
    const inJs = await gen.next().value

    console.log(helloFun+" "+worldFun+" "+inJs)
}

result()