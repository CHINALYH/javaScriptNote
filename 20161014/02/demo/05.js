// [文件名]
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('./a.txt')
});

rl.on('line', (line) => {
  console.log('Line from file:', line);
});
