import { isPasswordValid, isPasswordValidSecondPolicy } from "./is-password-valid"

describe('old policy', () => {

    
    it('returns false when password has no characters', () => {
        const password: Password = {
            minChars: 1,
            maxChars: 2,
            char: 'a',
            password: 'bbbbb'
        }
        
        const result = isPasswordValid(password)
        
        expect(result).toBeFalsy()
    })
    
    it('returns true when the number of required characters is in the bounds', () => {
        const password: Password = {
            minChars: 1,
            maxChars: 3,
            char: 'a',
            password: 'bbaabb'
        }
        
        const result = isPasswordValid(password)
        
        expect(result).toBeTruthy()
    })
    
    it('returns true when the number of characters is on the min bounds', () => {
        const password: Password = {
            minChars: 1,
            maxChars: 3,
            char: 'a',
            password: 'bbabb'
        }
        
        const result = isPasswordValid(password)
        
        expect(result).toBeTruthy()
    })
    
    it('returns true when the number of characters is on the max bounds', () => {
        const password: Password = {
            minChars: 1,
            maxChars: 3,
            char: 'a',
            password: 'bbaaabb'
        }
        
        const result = isPasswordValid(password)
        
        expect(result).toBeTruthy()
    })
    
    it('returns false when the number of characters is under the min bounds', () => {
        const password: Password = {
            minChars: 2,
            maxChars: 3,
            char: 'a',
            password: 'bbabb'
        }
        
        const result = isPasswordValid(password)
        
        expect(result).toBeFalsy()
    })
    
    it('returns false when the number of characters is over the max bounds', () => {
        const password: Password = {
            minChars: 2,
            maxChars: 3,
            char: 'a',
            password: 'bbaaaabb'
        }
        
        const result = isPasswordValid(password)
        
        expect(result).toBeFalsy()
    })
})

describe('new policy', () => {
    it('returns true when only one character is at the correct location', () => {        
        const password: Password = {
            minChars: 1,
            maxChars: 3,
            char: 'a',
            password: 'abcde'
        }
        
        const result = isPasswordValidSecondPolicy(password)
        
        expect(result).toBeTruthy()
    })

     it('returns false when the character is at neither location', () => {        
        const password: Password = {
            minChars: 1,
            maxChars: 3,
            char: 'b',
            password: 'cdefg'
        }
        
        const result = isPasswordValidSecondPolicy(password)
        
        expect(result).toBeFalsy()
     })
    
    it('return false when the character is at both locations', () => {
        const password: Password = {
            minChars: 2,
            maxChars: 9,
            char: 'c',
            password: 'ccccccccc'
        }
        
        const result = isPasswordValidSecondPolicy(password)
        
        expect(result).toBeFalsy()
    })
})