/*
* This program calculates factorials using recursion.
*
* @author  Kaitlyn Ip
* @version 1.0
* @since   2024-03-25
*/

import java.util.Scanner;

/**
* This is the Main class.
*/
final class Factorial {
    /**
    * Prevent instantiation
    * Throw an exception IllegalStateException.
    * if this ever is called
    *
    * @throws IllegalStateException if instantiation is attempted
    */
    private Factorial() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
    * This method calculates the factorial of a given integer using recursion.
    *
    * @param inputInt the integer whose factorial is to be calculated
    *
    * @return factorial of inputted integer
    */
    public static int factorial(int inputInt) {
        int returnValue = 0;
        if (inputInt < 0) {
            returnValue = -1;
        } else {
            if (inputInt <= 1) {
                returnValue = 1;
            } else {
                returnValue = inputInt * factorial(inputInt - 1);
            }
        }

        return returnValue;
    }

    /**
    * The starting main() function.
    *
    * @param args No args will be used
    */
    public static void main(String[] args) {
        final Scanner scanner = new Scanner(System.in);
        System.out.print("Entered = ");
        final int inputInt = scanner.nextInt();
        final int factorialOfInt = factorial(inputInt);
        System.out.println("Returned = " + factorialOfInt);

        System.out.println("\nDone.");
    }
}
