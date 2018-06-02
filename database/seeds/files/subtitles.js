'use strict';

const _ = require('lodash');
const fs = require('fs');

module.exports = () => {
    var subtitles = [];

    fs.readdirSync('./database/files/subtitles/audio').forEach(function(file) {
        subtitles.push({
            path: `database/files/subtitles/audio/${file}`,
            metadata: {},
            type: 'subtitles',
            root: 'audios'
        });
    });
    fs.readdirSync('./database/files/subtitles/video').forEach(function(file) {
        subtitles.push({
            path: `database/files/subtitles/video/${file}`,
            metadata: {},
            type: 'subtitles',
            root: 'videos'
        });
    });

    return subtitles;
};
