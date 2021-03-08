const readline = require('readline')

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let rows = [];

rl.on('line', function(line) {
    rows.push(line)
    if (rows.length >= 2) {
        let found = false;
        let s = rows[0];
        let t = rows[1];
        let set = new Set();
        // 遍历s
        for (let i = 0; i < s.length; i++) {
            if (found) {
                break;
            }
            let arr = Array.from(set);
            for (let str of arr) {
                set.add(str + s[i]);
                if (set.has(t)) {
                    found = true;
                    break;
                }
            }
        }
        if (found) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
})