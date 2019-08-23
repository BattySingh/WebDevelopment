'use strict';

const fs = require('fs');

fs.writeFile('target.txt', 'Madara Uchiha', (err) => {
    if (err) {
        throw err;
    }
    console.log('Successfully Saved!');
});
