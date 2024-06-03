/*
* This program shows recursion.
*
* @author  Kaitlyn Ip
* @version 1.0
* @since   2024-03-25
*/

/**
* This runs testcases.
*/
final class ReverseString {

    /**
    * Prevent instantiation.
    * Throw an exception IllegalStateException.
    * if this is ever called
    *
    * @throws IllegalStateException if this is ever called
    *
    */
    private ReverseString() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
    * The starting main() function.
    *
    * @param args No args will be used
    */
    public static void main(final String[] args) {
        final String og = "original string: ";
        final String reversed = "reversed string: ";
        // input
        String original_string = "recursion";
        System.out.println(og + original_string);
        System.out.println(
            reversed + reverseString(original_string)
        );
        System.out.println();

        original_string = "";
        System.out.println(og + original_string);
        System.out.println(
            reversed + reverseString(original_string)
        );
        System.out.println();

        original_string = "Room212";
        System.out.println(og + original_string);
        System.out.println(
            reversed + reverseString(original_string)
        );
        System.out.println();

        System.out.println("\nDone.");
    }

    /**
    * The reverse string() function.
    *
    * @param input string that is inputted
    *
    * @return reversed string
    */
    public static String reverseString(String input) {
        String input_string = input;
        if (input_string.length() > 0) {
            final char myChar = input_string.charAt(0);
            input_string = input_string.substring(1, input_string.length());
            input_string = reverse_string(input_string);
            input_string += myChar;
        }
        return input_string;
    }
}
