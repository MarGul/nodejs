console.log('Starting app.js');

// All build in modules at nodejs.org/api

// The OS module is everything about your operating system
const os = require('os');
let user = os.userInfo();

// The fs module is to handle files
const fs = require('fs');

fs.appendFile('greetings.txt', `Hello ${user.username}`, (err) => {
    if (err) {
        console.log('Unable to write to file');
    }
});

// Loading in our own module
const notes = require('./notes');

// Package that we pulled in from npm
// Node will first look for a core module called lodash, it wont find it so
// it will look in node_modules
const _ = require('lodash');
console.log(_.isString('Yep'));
let filteredArray = ['Marcus', 1, 'Marcus', 2, 4, 2, 5];
console.log(_.uniq(filteredArray));