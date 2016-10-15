var fs = require('fs');
console.log('main start');
fs.stat('./a.txt', (error, stats) => {
  if (stats) {
    fs.unlink('./a.txt', (error) => {
      if (error) throw error;
      fs.writeFile('./a.txt', 'new content', (error) => {
        if (error) throw error;
        console.log('创建文件成功');
      });
    });
  } else {
    fs.writeFile('./a.txt', 'new content', (error) => {
      if (error) throw error;
      console.log('创建文件成功');
    });
  }
});
console.log('main running');
fs.stat('./b.txt',(error, stats)=>{
  console.log();
});
console.log('main end');




