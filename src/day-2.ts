import { getLinesFromFile } from "./read-file";
import path from "path"
import { lineToPassword } from "./line-to-password";
import { isPasswordValid, isPasswordValidSecondPolicy } from "./is-password-valid";
import './types'

const lines = getLinesFromFile(path.join(__dirname, './datasets/day-2.txt'))
const passwords = lines.map(lineToPassword)
const validPasswords = passwords.filter(isPasswordValid)
const newValidPasswords = passwords.filter(isPasswordValidSecondPolicy)

console.log('old', validPasswords.length)
console.log('old', newValidPasswords.length)
