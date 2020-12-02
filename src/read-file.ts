import { readFileSync } from "fs"

const readFile = (filePath: string): string => {
    const buffer = readFileSync(filePath)
    const stringified = buffer.toString()

    return stringified
}

export const getLinesFromFile = (filePath: string): Array<string> => {
    const stringified = readFile(filePath)

    return stringified.split('\n')
}