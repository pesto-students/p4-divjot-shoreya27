const math = require('./simpleMath')

test('adds 2 number', ()=>{
    expect(math.sum(1,2)).toBe(3)
})

test('subtract 2 number', ()=>{
    expect(math.diff(5,4)).toBe(1)
})

test('product of 2 number', ()=>{
    expect(math.product(10,10)).toBe(100)
})