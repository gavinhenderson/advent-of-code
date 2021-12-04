import { getAllPermutations } from "./get-all-permutations"

export const entriesThatSumToGivenNumber = (entries: Array<number>, target: number, outputLength: number): Array<number> => {
    const allCombinations = getAllPermutations(entries, outputLength)

    for (let combination of allCombinations) {
        const combinationSum = sumArray(combination)

        if (combinationSum === target) {
            return combination.sort((a, b) => a - b)
        }
    }

 
    
    throw new Error('Solution not found')

}

const sumArray = (input: Array<number>): number => {
    return input.reduce((accumulator, currentValue) => accumulator + currentValue)
}