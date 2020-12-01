export const entriesThatSumToGivenNumber = (entries: Array<number>, target: number): Array<number> => {
    for (let entryA of entries) {
        for (let entryB of entries) {
            if (entryA + entryB == target) {
                return [entryA, entryB].sort((a, b) => a-b)
            }
        }
    }
    
    throw new Error('Solution not found')

}