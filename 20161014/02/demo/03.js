// [文件名]


var fs = require('fs');

fs.readFile('./1.png', (error, data) => {

  console.log(data.toString('base64'));

});