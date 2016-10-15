// Node如何充分利用单线程

const fs = require('fs');
console.time('timer');

function foo(value, callback) {
  // 无阻塞
  callback(null, value % 2);
}

fs.stat('./a.txt', function statCallback1(err, stat) {
  if (stat) {
    foo(stat.size,function sizeCallback(error,evenorodd){
      console.log(evenorodd);
    });
  }
});

fs.stat('./b.txt', function statCallback2(err, stat) {
  if (stat) {
    fs.readFile('./b.txt', function readFileCallback2(err, content) {
      console.log(content);
    });
  }
});

console.timeEnd('timer');

