const path = require("node:path") // node:  is optional but prefered in order to avoid conflicts
console.log(__filename);
// D:\node js projects and notes\path.js
console.log(__dirname);
// D:\node js projects and notes

console.log(path.basename(__filename));
// path.js
console.log(path.basename(__dirname));
// node js projects and notes   

console.log(path.extname(__filename));
// .js


console.log(path.parse(__filename));
// {
//     root: 'D:\\',
//     dir: 'D:\\node js projects and notes',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
//   }


console.log(path.format(path.parse(__filename)));
// D:\node js projects and notes\path.js


console.log(path.isAbsolute(__filename));
// true

console.log(path.isAbsolute('./data.json'));
// false

console.log(path.join('folder1','main.js'));
// folder1\main.js


console.log('--------------------resolve');

console.log(path.resolve('f0lder1','folder2','index.js'));
// D:\node js projects and notes\f0lder1\folder2\index.js
console.log(path.resolve('/f0lder1','folder2','index.js'));
// D:\f0lder1\folder2\index.js
console.log(path.resolve('/f0lder1','//folder2','index.js'));
// D:\folder2\index.js
console.log(path.resolve('/f0lder1','//folder2','../index.js'));
// D:\index.js
console.log(path.resolve(__dirname,'index.js'));
// D:\node js projects and notes\index.js