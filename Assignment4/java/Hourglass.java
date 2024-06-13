/*
* This program uses a method to create an hourglass of asterisks
*
* @author  Kaitlyn Ip
* @version 1.0
* @since   2024-01-01
*/

import java.util.Scanner;

/**
* This is the program.
*/
final class Hourglass {
    /**
    * Prevent instantiation.
    * Throw an exception IllegalStateException.
    * if this is ever called
    *
    * @throws IllegalStateException if this is ever called
    *
    */
    private Hourglass() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
     * Generates an hourglass.
     *
     * @param numberSize the size of the hourglass
     * @param hourglassNumber the next number of spaces
     * @return the generated hourglass
     */
    static String createHourglass(int numberSize, int hourglassNumber) {
        // String constants
        final String asterisk = "*";
        final String newLine = "\n";
        final String space = " ";
        final String returnHourglass;
        if (numberSize == 1) {
            // Bottom half of the hourglass
            int newHourglassNumber = hourglassNumber;
            int reverseHourglassNumber = 0;
            String hourglassBase = "*\n";
            for (int counter = 0; counter < hourglassNumber; counter++) {
                hourglassBase = space + hourglassBase;
            }
            hourglassBase = hourglassBase + hourglassBase;
            if (hourglassNumber > 1) {
                reverseHourglassNumber = 2;
            }
            while (reverseHourglassNumber <= hourglassNumber) {
                for (
                    int counter = 0;
                    counter < newHourglassNumber - 1; counter++
                ) {
                    hourglassBase = hourglassBase + space;
                }
                for (
                    int counter = 0;
                    counter < reverseHourglassNumber; counter++
                ) {
                    hourglassBase = hourglassBase + asterisk + space;
                }
                if (reverseHourglassNumber < hourglassNumber) {
                    hourglassBase = hourglassBase + newLine;
                }
                newHourglassNumber--;
                reverseHourglassNumber++;
            }

            returnHourglass = hourglassBase;
        } else {
            // Top half of the hourglass
            int hourglassCounter = 1;
            String hourglassBase = asterisk + space;
            hourglassCounter = hourglassNumber + 1;
            for (int counter = 1; counter < numberSize; counter++) {
                hourglassBase = hourglassBase + asterisk + space;
            }
            for (int counter = 0; counter < hourglassNumber; counter++) {
                hourglassBase = space + hourglassBase;
            }

            returnHourglass = hourglassBase + newLine
                + createHourglass(numberSize - 1, hourglassCounter);
        }

        return returnHourglass;
    }

    /**
    * The starting main() function.
    *
    * @param args No args will be used
    */
    public static void main(final String[] args) {
        // Create scanner
        final Scanner input = new Scanner(System.in);

        // Check for valid input
        try {
            System.out.print("Enter the size of the hourglass: ");
            final int selectedNumber = Integer.parseInt(input.nextLine());
            if (selectedNumber < 1) {
                input.close();
                throw new NumberFormatException();
            }
            System.out.println(
                "Hourglass:\n\n" + createHourglass(selectedNumber, 1)
            );
        } catch (NumberFormatException nfe) {
            System.out.println("Invalid number.");
        }

        // Close scanners
        input.close();

        // Show the program as done
        System.out.println("\nDone.");
    }
}

