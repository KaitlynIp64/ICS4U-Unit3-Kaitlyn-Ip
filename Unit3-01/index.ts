/*
 * This is a program that shows recursion.
 *
 * @author  Kaitlyn Ip
 * @version 1.0
 * @since   2024-01-01
 */

// reverse inputted string with recursion
// checks if input string is not empty

function reverse_string(input_string: string): string {
  // checks that input_string is not empty
  if (input_string) {
    // extracts first character of input_string and assigns to myChar
    const myChar = input_string.charAt(0)
    // removes first character of input_string
    // creates new string that starts from second character
    // updates input_string with new string
    input_string = input_string.slice(1, input_string.length)
    // makes recursive call to reverse_string with updated input_string
    // assigned back to input_string
    input_string = reverse_string(input_string)
    // adds previously extracted first character to result of recursive call
    // repeats process as recursion unwinds, building reversed string
    input_string += myChar
  }
  // returns final reversed string once complete
  return input_string
}

let original_string = "recursion"
console.log("original string: " + original_string)
console.log("reversed string: " + reverse_string(original_string))
console.log()

original_string = ""
console.log("original string: " + original_string)
console.log("reversed string: " + reverse_string(original_string))
console.log()

original_string = "Room212"
console.log("original string: " + original_string)
console.log("reversed string: " + reverse_string(original_string))
console.log()

console.log("\nDone.")
