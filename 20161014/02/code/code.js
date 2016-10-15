'use strict';

exports.list = (args) => {
  const dist = args[0] || 'list.md';
  const fs = require('fs');
  const path = require('path');
  const list = {};

  const listpath = path.join(__dirname, dist);

  fs.stat(listpath, (error, stats) => {
    if (stats) {
      fs.unlinkSync(listpath);
    }
    fs.readdir(__dirname, (error, files) => {
      const file = fs.createWriteStream(listpath, 'utf8');
      files.splice(files.indexOf(path.basename(__filename)), 1);
      files.forEach((item) => {
        fs.readFile(path.join(__dirname, item), 'utf8', (error, content) => {
          list[item] = content.split('\n')[0].replace(/\/+/, '').trim();
          if (Object.keys(list).length === files.length) {
            // 执行完成
            Object.keys(list).sort().forEach((key) => {
              let element = list[key];
              file.write(`[${key}] = ${element}\n`, 'utf8');
            });
          }
        });
      });
    });
  });
};

function generator(count) {
  count = parseInt(count);
  const fs = require('fs');
  const path = require('path');
  const length = count.toString().length;
  for (let i = 1; i < count + 1; i++) {
    fs.writeFile(path.join(__dirname, `${new Array(length - i.toString().length + 1).join('0') + i.toString() }.js`), '// [文件名]\n');
  }
}
exports.init = (args) => {
  const count = args[0];
  if (count) {
    generator(count);
  } else {
    const readline = require('readline');
    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.question('生成几个代码文件？', (c) => {
      generator(c);
      rl.close();
    });
  }
};

if (!module.parent) {
  const argv = process.argv.slice(2);
  const command = argv[0];
  if (exports[command]) {
    exports[command](argv.slice(1));
  }
}


