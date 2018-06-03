'use strict';

const createDocuments = require('./createDocuments');
const co = require('co');
const db = require('./db');

db.on('connected', () => {
    co(function*() {
        try {
            yield new Promise((resolve, reject) => {
                db.dropDatabase(err => {
                    if (err) throw err;
                    console.log('\t\x1b[41m', 'Database dropped', '\x1b[0m');
                    resolve();
                });
            });

            let parkings = yield createDocuments(require('./seeds/parkings')());
            
        } catch (err) {
            console.error(err.stack);
        }
        console.log('\n\t\t', ':)');
        process.exit();
    });
});
