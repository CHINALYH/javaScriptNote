

// 获取当前脚本所在路径
console.log(__dirname);
// 文件路径
console.log(__filename);


const fs = require('fs');

// 所有的文件操作都必须是绝对路径（物理路径）
fs.readFile(__dirname + '/../list.md','utf8', (error, content) => {
  if (error)
    throw error;
  console.log(content);
});


