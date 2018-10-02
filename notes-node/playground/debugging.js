/**
 * Start debugger by node inspect {file}
 * 
 * commands:
 * list (10) - Lists the 10 lines above and below the line we are on right now. 
 * n - move on to next statement
 * c - Run the rest of the statements.
 * repl - Get into another form (from the debugger) where you can execute statements and
 *        For example look at what a variable is set to. Maybe change it and so on. 
 * 
 * In the file instead of having to step through the full file with n you can type
 * debugger; wherever you want the debugger to stop. You can use c to skip through
 * debugger statements. So run c first to stop by the first debugger statement. 
 * 
 * you can actually run inspect with nodemon as well. It's a lot easier so that you can
 * change the app and letting nodemon restart.
 */


let person = {
    name: 'Von Schvaffenhaben'
}

person.age = 25;

debugger;

person.name = "Mike";


console.log(person);