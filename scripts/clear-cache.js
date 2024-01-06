const { rm } = require('fs');
const { join: joinPath } = require('path');

const cacheDir = joinPath(__dirname, '..', 'node_modules', '.cache');
rm(cacheDir, { recursive: true, force: true }, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Cache is deleted!');
});
