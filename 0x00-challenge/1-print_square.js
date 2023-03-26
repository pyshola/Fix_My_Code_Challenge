#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/


if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1)
}

var num = process.argv[2]

size = parseInt(num.toString(10), 10)
//console.log(size)

for (let i = 0 ; i < size ; i++) {
    for (let j = 0 ; j < size ; j++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}
