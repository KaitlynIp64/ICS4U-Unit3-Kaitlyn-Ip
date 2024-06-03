/*
 * This is a program that calculates factorials using recursion.
 *
 * @author  Kaitlyn Ip
 * @version 1.0
 * @since   2024-01-01
 */

import { createPrompt } from 'bun-promptx'

function factorial(inputInt: number): number {
  /*
  * This calculates the factorial using recursion.
  */
  if (inputInt < 0) {
    return -1
  } else {
    if (inputInt <= 1) {
      return 1
    } else {
      return (inputInt * factorial(inputInt - 1))
    }
  }
}

const userInput = createPrompt(`Entered = `)
const inputInt = parseInt(userInput.value)
let factorialOfInt = factorial(inputInt)
console.log(`Returned = ${factorialOfInt}`)

console.log(`\nDone.`)
