var fs = require('fs');

// 耗费时间
fs.readFile('./typings/node/node.d.ts',
  'utf8',

  (error, data) => {
    if (error)
      throw error;
    console.log(data);
  }

);
