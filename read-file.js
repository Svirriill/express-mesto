const fs = require('fs').promises;

const getJson = (filePath) => fs.readFile(filePath, { encoding: 'utf8' }).then((data) => JSON.parse(data)).catch((err) => console.log(err));

module.exports = getJson;
