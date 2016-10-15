var fs = require('fs');

var frames = [];

for (var i = 1; i < 7; i++) {
  frames[frames.length] = fs.readFileSync(`./frames/${i}.txt`, 'utf8');
}

var fps = 10;
// 当前显示哪一帧
var current = 0;
var render = () => {
  // 将当前控制台清空
  process.stdout.write('\033[2J');
  process.stdout.write('\033[0f');

  // 输出新的内容
  if (current === frames.length) { current = 0; }
  process.stdout.write(frames[current++]);
};

setInterval(render, 1000 / fps);

