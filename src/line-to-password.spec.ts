import { lineToPassword } from "./line-to-password"

it('is a line with single letter min and max', () => {
    const line = '1-6 f: wnfffcqfffvfff'
    const password = lineToPassword(line)

    expect(password.char).toBe('f')
    expect(password.maxChars).toBe(6)
    expect(password.password).toBe('wnfffcqfffvfff')
    expect(password.minChars).toBe(1)
})

it('is a line with multi letter min and max', () => {
    const line = '11-12 z: zzzzgzzzzszz'
    const password = lineToPassword(line)

    expect(password.char).toBe('z')
    expect(password.maxChars).toBe(12)
    expect(password.password).toBe('zzzzgzzzzszz')
    expect(password.minChars).toBe(11)
})