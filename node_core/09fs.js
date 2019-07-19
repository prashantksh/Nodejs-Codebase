const fs = require('fs');
const util = require('util');
const eol = require('os').EOL;

fs.appendFile('test.txt', 'Here goes the content' + eol, () => {
  util.log('file 1 done');
});

fs.appendFile('test.txt', 'Here goes the content 2' + eol, () => {
  util.log('file 2 done');
});
