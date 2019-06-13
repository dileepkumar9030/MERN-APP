const path = require('path')
// console.log(__filename)
// console.log(path.basename(__filename,'.js'))
// console.log(path.dirname(__filename))
//console.log(process.env.PATH)
// const a = process.env.PATH.split(path.delimiter);
// // console.log(a)
// console.log(path.extname(__filename))
// console.log(path.format({dir:__dirname,base:'file.txt'}))
// console.log(path.parse(__filename))

// console.log(path.join(__dirname, 'test', 'hello.html'))

//console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\test\\aaa.'))
//console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))
console.log(__filename.split(path.sep))
