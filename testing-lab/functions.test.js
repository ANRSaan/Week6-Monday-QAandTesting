const {returnTwo, greeting, add, subtract, multiply, divide} = require('./functions')

test('This should return the number 2', () =>{
    expect(returnTwo()).toBe(2)
})

test('This should return a greeting "Hello, *name*"', () => {
    expect(greeting('James')).toBe('Hello, James')
    expect(greeting('Jill')).toBe('Hello, Jill')
})

test('This should return the sum on the two arguments', () => {
    expect(add(2,3)).toBe(5)
    expect(add(1234,5)).toBe(1239)
})

describe('Math functions', () => {
    test('This tests subtract to subtract num1 from num2', () => {
        expect(subtract(3,2)).toBe(1)
        expect(subtract(5,1)).toBe(4)
    })
    test('This tests multiply to multiply num1 by num2', () => {
        expect(multiply(3,2)).toBe(6)
        expect(multiply(5,1)).toBe(5)
    })
    test('This tests divide to divide num1 by num2', () => {
        expect(divide(6,2)).toBe(3)
        expect(divide(10,5)).toBe(2)
    })
})