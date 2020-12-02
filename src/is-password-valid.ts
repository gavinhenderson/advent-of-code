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