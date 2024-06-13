/*
* This program solves the magic squares
* @author  Kaitlyn Ip
* @version 1.0
* @since   2024-01-01
*/

/**
* This is the magic squares program.
*/
final class MagicSquares {
    /**
    * Prevent instantiation.
    * Throw an exception IllegalStateException.
    * if this is ever called
    *
    * @throws IllegalStateException if this is ever called
    *
    */
    private MagicSquares() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
     * Generates magic squares.
     *
     * @param square starting square
     * @param index the first index to use
     */
    static void genSquare(int[] square, int index) {
        final int maxNumber = 9;
        for (int counter = 1; counter < maxNumber + 1; counter++) {
            square[index] = counter;
            if (index < maxNumber - 1) {
                genSquare(square, index + 1);
            } else {
                if (isMagic(square)) {
                    boolean duplicates = false;
                    for (int i = 0; i < square.length; i++) {
                        for (int j = i + 1; j < square.length; j++) {
                            if (square[i] == square[j]) {
                                duplicates = true;
                                break;
                            }
                        }
                    }
                    if (!duplicates) {
                        printMagicSquare(square);
                    }
                }
            }
        }
    }

    /**
     * Check if square is magic.
     *
     * @param preSquare the square to be checked
     * @return if the square is magic
     */
    static boolean isMagic(int[] preSquare) {
        final int magicNumber = 15;
        final int three = 3;
        final int four = 4;
        final int five = 5;
        final int six = 6;
        final int seven = 7;
        final int eight = 8;
        final int row1 = preSquare[0] + preSquare[1] + preSquare[2];
        final int row2 = preSquare[three] + preSquare[four] + preSquare[five];
        final int row3 = preSquare[six] + preSquare[seven] + preSquare[eight];
        final int col1 = preSquare[0] + preSquare[three] + preSquare[six];
        final int col2 = preSquare[1] + preSquare[four] + preSquare[seven];
        final int col3 = preSquare[2] + preSquare[five] + preSquare[eight];
        final int diag1 = preSquare[0] + preSquare[four] + preSquare[eight];
        final int diag2 = preSquare[2] + preSquare[four] + preSquare[six];

        return row1 == magicNumber && row2 == magicNumber && row3 == magicNumber
                && col1 == magicNumber && col2 == magicNumber
                && col3 == magicNumber && diag1 == magicNumber
                && diag2 == magicNumber;
    }

    /**
     * Print formatted magic squares.
     *
     * @param outputSquare the square to be formatted
     */
    static void printMagicSquare(int[] outputSquare) {
        final String sideString = "\n*****";
        final String space = " ";
        final int lastRowOne = 3;
        final int lastRowTwo = 6;
        System.out.println(sideString);
        for (int counter = 0; counter < outputSquare.length; counter++) {
            if (counter == lastRowOne || counter == lastRowTwo) {
                System.out.println();
                System.out.print(outputSquare[counter] + space);
            } else {
                System.out.print(outputSquare[counter] + space);
            }
        }
        System.out.println(sideString);
    }

    /**
    * The starting main() function.
    *
    * @param args No args will be used
    */
    public static void main(final String[] args) {
        // Generate magic squares
        final int[] square = {0, 0, 0, 0, 0, 0, 0, 0, 0};
        genSquare(square, 0);

        // Show the program as done
        System.out.println("\nDone.");
    }
}

