/*
 * This is a program that calculates a magic square.
 *
 * @author  Kaitlyn Ip
 * @version 1.0
 * @since   2024-01-01
 */

// Constants
const magicNumber: number = 15

/**
 * Generate magic squares
 */
function genSquare(square: number[], index: number): void {
  const maxNumber: number = 9
  for (let i = 1; i < maxNumber + 1; i++) {
    square[index] = i
    if (index < maxNumber - 1) {
      genSquare(square, index + 1)
    } else {
      const duplicates: number[] = square.filter((item, index) => square.indexOf(item) < index)
      if (magicCheck(square) && duplicates.length == 0) {
        printMagicSquare(square)
      }
    }
  }
}

/**
 * Checks if square is magic
 */
function magicCheck(preSquare: number[]): boolean {
  let row1: number = preSquare[0] + preSquare[1] + preSquare[2]
  let row2: number = preSquare[3] + preSquare[4] + preSquare[5]
  let row3: number = preSquare[6] + preSquare[7] + preSquare[8]
  let col1: number = preSquare[0] + preSquare[3] + preSquare[6]
  let col2: number = preSquare[1] + preSquare[4] + preSquare[7]
  let col3: number = preSquare[2] + preSquare[5] + preSquare[8]
  let diag1: number = preSquare[0] + preSquare[4] + preSquare[8]
  let diag2: number = preSquare[2] + preSquare[4] + preSquare[6]

  return row1 == magicNumber && row2 == magicNumber && row3 == magicNumber
         && col1 == magicNumber && col2 == magicNumber
         && col3 == magicNumber && diag1 == magicNumber && diag2 == magicNumber
}

/**
 * Print formatted magic squares
 */
function printMagicSquare(outputSquare: number[]): void {
  console.log("\n*****")
  for (let counter = 0; counter < outputSquare.length; counter++) {
    if (counter == 3 || counter == 6) {
      console.log()
      process.stdout.write(outputSquare[counter] + " ")
    } else {
      process.stdout.write(outputSquare[counter] + " ")
    }
  }
  console.log("\n*****")
}

let square: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0]

genSquare(square, 0)

console.log('\nDone.')