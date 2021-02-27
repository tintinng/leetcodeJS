const readline = require('readline');

// 创建readline.Interface实例
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tokens = [];
let set = new Set();

rl.on("line", function(line) {
    tokens = line.split(' ');
    for (let token of tokens) {
        set.add(token)
    }
}).on("close", function() {
    console.log(set.size)
})



// rl.question('你如何看待 Node.js 中文网？', (answer) => {
//     // TODO：将答案记录在数据库中。
//     console.log(`感谢您的宝贵意见：${answer}`);
  
//     // 放弃对输入、输出流的控制
//     rl.close();
// });

// 当input流接收到行尾输入(\n \r \r\n)时,监听函数会收到一行输入的字符串
// rl.on('line', (input) => {
//     console.log(typeof input);
//     console.log(`接收到：${input}`);
// });

// rl.on('pause', () => {
//     console.log('Readline 暂停');
// });

// rl.on('resume', () => {
//     console.log('Readline 恢复');
// });