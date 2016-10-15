// Node如何充分利用单线程

const fs = require('fs');

console.time('timer');

// 判断是否存在list文件
fs.stat('./list.md', (err, stats) => {
  if (err) {
    console.log('文件不存在');
    // 创建
    fs.writeFile('./list.md', new Date(), (err) => {
      if (err) {console.error(err);return false;}
      console.log('文件创建成功');
    });
    return false;
  }
  // 存在删除
  fs.unlink('./list.md', (err) => {
    if (err) {console.error(err);return false;}
    // 创建
    fs.writeFile('./list.md', new Date(), (err) => {
      if (err) {console.error(err);return false;}
      console.log('文件删除后创建成功');
    });
  });
});

console.timeEnd('timer');