export const lineToPassword = (line: string): Password => {
    const [rules, password] = line.split(': ')
    const [length, char] = rules.split(' ')
    const [minAsString, maxAsString] = length.split('-')

    return {
        minChars: parseInt(minAsString),
        maxChars: parseInt(maxAsString),
        char,
        password
    }
}