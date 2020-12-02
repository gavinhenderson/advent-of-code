import { isPasswordValid } from "./is-password-valid"

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