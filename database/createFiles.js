'use strict';

const Grid = require('gridfs-stream');
const fs = require('fs');
const db = require('../db');
const mime = require('mime');
const gfs = new Grid(db.connection.db, db.mongo);

var counter = 0;

function createFile(file) {
    return new Promise((resolve, reject) => {
        let writeStream = gfs.createWriteStream({
            filename: file.path.replace(/^.*[\\\/]/, ''),
            metadata: file.metadata,
            content_type: mime.lookup(file.path),
            root: `${file.type}.${file.root}`,
        });

        fs.createReadStream(file.path).pipe(writeStream);

        writeStream.on('close', data => {
            data.fileUrl = `files/${file.type}/${file.root}/${data._id}`;

            counter++;
            process.stdout.write(`   - File created successfully`);
            process.stdout.cursorTo(0);
            process.stdout.write(`${counter} \r`);

            resolve(data);
        });

        writeStream.on('close', err => {
            reject(err);
        });
    });
}

module.exports = files => {
    var promises = [];

    files.forEach(file => {
        promises.push(createFile(file));
    });

    return promises;
};
