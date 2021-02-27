const readline = require('readline');

// 创建readline.Interface实例
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tokens = [];
let set = new Set();

// 不确定输入多少行
rl.on("line", function(line) {
    tokens = line.split(' ');
    for (let token of tokens) {
        set.add(token)
    }
}).on("close", function() {
    console.log(set.size)
})