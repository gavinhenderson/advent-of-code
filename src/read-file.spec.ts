import path from "path"
import { getLinesFromFile } from "./read-file"

it('doesnt throw any errors when given a valid file', () => {
    const currentPath = path.join(__dirname, './datasets/day-2.txt')
    const lines = getLinesFromFile(currentPath)
    
    expect(lines).toBeDefined()
})

it('reads the correct amount of lines from the given file', () => {
    const currentPath = path.join(__dirname, './datasets/day-2.txt')
    const lines = getLinesFromFile(currentPath)
    
    expect(lines.length).toBe(1000)
})