import { entriesThatSumToGivenNumber } from "./entires-that-sum-to-given-number"

describe('output length of 2', () => {
    it('picks out numbers that sum to a given number', () => {
        const entries = [1721, 979, 366, 299, 675, 1456]
    
        // These will always be in order
        const [a, b] = entriesThatSumToGivenNumber(entries, 2020, 2)
    
        expect(a).toBe(299)
        expect(b).toBe(1721)
    })
    
    it('always orders the result highest to lowest', () => {
        const entries = [2,1]
    
        // These will always be in order
        const [a, b] = entriesThatSumToGivenNumber(entries, 3, 2)
    
        expect(a).toBe(1)
        expect(b).toBe(2)
    })
})

describe('output length of 2', () => {
    it('picks out numbers that sum to a given number', () => {
        const entries = [1721, 979, 366, 299, 675, 1456]
    
        // These will always be in order
        const [a, b, c] = entriesThatSumToGivenNumber(entries, 2020, 3)
    
        expect(a).toBe(366)
        expect(b).toBe(675)
        expect(c).toBe(979)
    })
})

it.todo('throws an error if no solution exists')