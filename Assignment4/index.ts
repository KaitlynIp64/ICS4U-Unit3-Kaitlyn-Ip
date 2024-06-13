/*
* This program makes an hourglass using asterisks.
* @author  Kaitlyn Ip
* @version 1.0
* @since   2024-01-01
*/

import { createPrompt } from 'bun-promptx'

/**
 * Generates an hourglass.
 *
 * @param numberSize the size of the hourglass
 * @param hourglassNumber the next number of spaces
 * @returns the generated hourglass
 */
function createHourglass(numberSize: number, hourglassNumber: number): string {
  if (numberSize == 1) {
    // Bottom half of the hourglass
    let newHourglassNumber: number = hourglassNumber
    let reverseHourglassNumber: number = 0
    let hourglassBase: string = '*\n'
    for (let counter: number = 0; counter < hourglassNumber; counter++) {
      hourglassBase = ' ' + hourglassBase
    }
    hourglassBase = hourglassBase + hourglassBase
    if (hourglassNumber > 1) {
      reverseHourglassNumber = 2
    }
    while (reverseHourglassNumber <= hourglassNumber) {
      for (let counter: number = 0; counter < newHourglassNumber - 1; counter++) {
        hourglassBase = hourglassBase + ' '
      }
      for (let counter: number = 0; counter < reverseHourglassNumber; counter++) {
        hourglassBase = hourglassBase + '*' + ' '
      }
      if (reverseHourglassNumber < hourglassNumber) {
        hourglassBase = hourglassBase + '\n'
      }
      newHourglassNumber--
      reverseHourglassNumber++
    }

    return hourglassBase
  } else {
    // Top half of the hourglass
    let hourglassCounter: number = 1
    let hourglassBase: string = '*' + ' '
    hourglassCounter = hourglassNumber + 1
    for (let counter: number = 1; counter < numberSize; counter++) {
      hourglassBase = hourglassBase + '*' + ' '
    }
    for (let counter: number = 0; counter < hourglassNumber; counter++) {
      hourglassBase = ' ' + hourglassBase
    }

    return hourglassBase + '\n' + createHourglass(numberSize - 1, hourglassCounter)
  }
}

const selectedNumber: number = createPrompt('Enter the size of the hourglass: ').value

if (isNaN(selectedNumber) || selectedNumber < 1) {
  console.log('Invalid number.')
} else {
  console.log(`Hourglass:\n\n${createHourglass(selectedNumber, 1)}`)
}

console.log('\nDone.')