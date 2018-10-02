const fs = require('fs');


let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

let add = (title, body) => {
    let notes = fetchNotes();
    let note = {title, body};

    let duplicateNotes = notes.filter(n => n.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);

        return note
    }
}

let remove = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter(n => n.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
}

let all = () => {

}

let read = (title) => {
    let notes = fetchNotes();

    return notes.find(n => n.title === title);
}

let log = (note) => {
    console.log('---')
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

/**
 * Module is an object that every node file has and the export property
 * is what will be added to the variable when we require.
 */
module.exports = {
    add,
    remove,
    all,
    read,
    log
};