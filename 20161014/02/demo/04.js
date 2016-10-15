// [文件名]


const fs = require('fs');

// fs.readdir('./',(error,files)=>{
//   files.forEach((file)=>{
//     console.log(file);
//   });
// });

function loaddir(root, depth) {
  fs.readdir(root, (error, files) => {
    files.forEach((file) => {
      fs.stat
      // console.log(file);
    });
  });
}