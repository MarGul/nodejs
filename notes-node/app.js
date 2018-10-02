console.log('Starting App');

const fs = require('fs');
const _ =  require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

const argv = yargs.argv;
let command = process.argv[2]

if (command === 'add') {
    let note = notes.add(argv.title, argv.body);

    if (note) {
        console.log('Added the note.');
        notes.log(note);
    } else {
        console.log('Note with the title already existed.');
    }
} else if (command === 'list') {
    notes.all();
} else if (command === 'read') {
    let note = notes.read(argv.title);
    if (note) {
        notes.log(note)
    } else {
        console.log('Could not find a note with that title');
    }
} else if (command === 'remove') {
    console.log(notes.remove(argv.title) ? 'Removed note' : 'No note to remove');
} else {
    console.log('Command not recognized');
}