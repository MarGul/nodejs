console.log('Starting App');

const fs = require('fs');
const _ =  require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

const argv = yargs.argv;
let command = process.argv[2]

if (command === 'add') {
    notes.add(argv.title, argv.body);
} else if (command === 'list') {
    notes.all();
} else if (command === 'read') {
    notes.read(argv.title);
} else if (command === 'remove') {
    notes.remove(argv.title);
} else {
    console.log('Command not recognized');
}