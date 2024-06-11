/*
 * This is a program that sorts an array and 
 * searches given input.
 *
 * @author  Kaitlyn Ip
 * @version 1.0
 * @since   2024-01-01
 */

import { createPrompt } from 'bun-promptx'

const MIN = 0
const MAX = 999
const ARRAY_SIZE = 50

// function performs binary search on sorted array
// returns index if number exists, else returns -1
function binarySearch(userArray: number[], userNumber: number,
  lowIndex: number, highIndex: number) {
  // indicates that number is not found
  let rVal: number = -1
  if (lowIndex <= highIndex) {
    let midIndex: number = Math.floor((lowIndex + highIndex) / 2)
    if (userArray[midIndex] == userNumber) {
      rVal = midIndex
    } else if (userArray[midIndex] > userNumber) {
      rVal = binarySearch(userArray, userNumber, lowIndex, midIndex - 1)
    } else {
      rVal = binarySearch(userArray, userNumber, midIndex + 1, highIndex)
    }
  }
  return rVal
}

// creates the array with numbers from 0-999
// empty array is made
// fils array with random integers from 0-999

let numberArray: number[] = []
// sorts array in ascending order
for (let i = 0; i < ARRAY_SIZE; i++) {
  numberArray[i] = Math.floor(Math.random() * (MAX + 1))
}

numberArray = numberArray.sort((a, b) => a - b)

console.log("\nSorted list of numbers:\n")
console.log(numberArray)

// this function allows user input and converts it to integer
// check if input is valid
try {
  const userInput = createPrompt(
    `What number are you searching for in the array? (integer between 0 and 999): `
  )
  // input is converted into integer using parseInt
  let inputInt = parseInt(userInput.value)
  // throws error if input is outside of range
  if (inputInt > MAX || inputInt < MIN) {
    throw Error()
  }
  console.log(`Returned = ${binarySearch(numberArray, inputInt, 0, numberArray.length - 1)}`)
} catch {
  console.log(`Invalid input.`)
}
console.log(`\nDone.`)
