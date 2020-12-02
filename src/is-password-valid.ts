export const isPasswordValid = (password: Password): boolean => {
    const numberOfOccurences = password.password.split("").filter(char =>  char === password.char).length

    if (numberOfOccurences > password.maxChars) {
        return false
    }

    if (numberOfOccurences < password.minChars){
        return false
    }

    return true
}

export const isPasswordValidSecondPolicy = (password: Password): boolean => {
    const charAtFirstPos = password.password[password.minChars-1]
    const charAtSecondPos = password.password[password.maxChars-1]

    const { char } = password
 
    const charOneMatches = charAtFirstPos == char
    const charTwoMatches = charAtSecondPos == char

    // XOR
    return ( charOneMatches && !charTwoMatches ) || ( !charOneMatches && charTwoMatches )
}