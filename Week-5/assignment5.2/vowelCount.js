const vowel = ['a','e','i','o','u']
function vowelCount(word){
    let vowelMap = new Map()
    for(let chr of word){
        chr = chr.toLowerCase()
        if(vowel.includes(chr)){
            //check whether map has that vowel
            if(vowelMap.has(chr)){
                //set its frequency to frequency+1
                vowelMap.set(chr, vowelMap.get(chr)+1)
            }else{
                vowelMap.set(chr,1)
            }
        }
    }
    return vowelMap
}

let friend = vowelCount("friend")
console.log({friend})
let book = vowelCount("book")
console.log({book})
let cysts = vowelCount("cysts")
console.log({cysts})
let Adieu = vowelCount("ADIEU")
console.log({Adieu}) 