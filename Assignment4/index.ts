/*
 * This is a program that makes palindromes.
 *
 * @author  Kaitlyn Ip
 * @version 1.0
 * @since   2024-01-01
 */


/*
 * This function calculates palindrome depth
 */
function PalindromeDepth(integer: number, currentDepth: number = 0): number {
    const reversedInteger: number = integer.toString().split('').reverse().join('')
    if (integer == reversedInteger) {
      return currentDepth
    } else {
      const sum: number = parseInt(integer) + parseInt(reversedInteger)
      return PalindromeDepth(sum, currentDepth + 1)
    }
  }
  
  /*
   * Check all 2 digit numbers
   */
  const start: number = 10
  const end: number = 99
  
  for (let i = start; i <= end; i++) {
    let intDepth: number = PalindromeDepth(i)
    console.log(`${i} has depth ${intDepth}`)
  }
    
  console.log("\nDone.")