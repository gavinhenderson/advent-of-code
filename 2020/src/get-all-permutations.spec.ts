import { getAllPermutations } from "./get-all-permutations";

it('gets all permutations of length 2', () => {
    const entries = [1, 2, 3];
    const permutations = [[1, 2], [1, 3], [2, 3]]
    
    const result = getAllPermutations(entries, 2)


    expect(result).toStrictEqual(permutations)
})

it('gets all permutations of length 3', () => {
    const entries = [1, 2, 3];
    const permutations = [[1, 2, 3]]
    
    const result = getAllPermutations(entries, 3)

    expect(result).toStrictEqual(permutations)
})