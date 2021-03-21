const readline = require('readline')
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.on("line", function(input) {
    let strsRes = splitStr(input);
    let res = "";
    for (let i = 0; i < strsRes.length; i++) {
        res += decodeString(strsRes[i])
    }
    console.log(res);
})