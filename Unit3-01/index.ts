/*
 * This is a program that shows recursion.
 *
 * @author  Kaitlyn Ip
 * @version 1.0
 * @since   2024-01-01
 */

// reverse inputted string with recursion
function reverse_string(input_string: string): string {
  if (input_string) {
    const myChar = input_string.charAt(0)
    input_string = input_string.slice(1, input_string.length)
    input_string = reverse_string(input_string)
    input_string += myChar
  }
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
