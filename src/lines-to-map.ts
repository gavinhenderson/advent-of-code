export const linesToMap = (lines: Array<string>): Array<Array<string>> => {
    return lines.map(line => line.split(''))
}